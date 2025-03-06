import config from "@/config";
import { connectDB } from "@/lib";
import { User } from "@/models/user.model";
import { hash } from "bcryptjs";
import { verify } from "jsonwebtoken";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  const session = await mongoose.startSession();
  const url = new URL(req.url);
  const baseUrl = url.origin;

  try {
    session.startTransaction();
    const formData = await req.formData();
    const password = formData.get("password")?.toString();
    const CPassword = formData.get("CPassword")?.toString();

    const searchParams = url.searchParams;

    const token = searchParams.get("token");

    if (!token) {
      const redirectUrl = new URL("/error", baseUrl);
      return NextResponse.redirect(redirectUrl);
    }

    if (!password || !CPassword) {
      const redirectUrl = new URL(
        `/reset-password?token=${token}&message=Password and confirm password didn't matched!`,
        baseUrl
      );
      return NextResponse.redirect(redirectUrl);
    }
    if (password !== CPassword) {
      const redirectUrl = new URL(
        `/reset-password?token=${token}&message=Password and confirm password didn't matched!`,
        baseUrl
      );
      return NextResponse.redirect(redirectUrl);
    }

    const payload = verify(token, config.token_secret);

    const userId = (payload as { userId: string })?.userId;

    const newPasswordHash = await hash(password, config.bcrypt_salt);

    await User.updateOne(
      { _id: userId },
      { $set: { password: newPasswordHash } }
    );

    await session.commitTransaction();
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (error) {
    await session.abortTransaction();
    const redirectUrl = new URL("/error", baseUrl);
    return NextResponse.redirect(redirectUrl);
  } finally {
    await session.endSession();
  }
  const redirectUrl = new URL("/", baseUrl);
  return NextResponse.redirect(redirectUrl);
};
