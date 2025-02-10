import config from "@/config";
import { connectDB, sendMailWithNodeMailer } from "@/lib";
import { PasswordResetRequest } from "@/models/passwordResetReq.model";
import { User } from "@/models/user.model";
import jwt from "jsonwebtoken";
import mongoose, { Types } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  await connectDB();
  const session = await mongoose.startSession();
  const baseUrl = req.headers.get("origin") || "http://localhost:3000";
  try {
    session.startTransaction();
    const formData = await req.formData();
    const email = formData.get("email")?.toString();

    const user = await User.findOne({ email }, { email });

    if (!user) {
      return NextResponse.redirect(
        new URL("/forget-password-confirmation", baseUrl)
      );
    }

    const tokenId = new Types.ObjectId();

    const token = jwt.sign(
      { tokenId, userId: user?._id },
      config.password_reset_token_secret,
      {
        expiresIn: "10m",
      }
    );
    await PasswordResetRequest.deleteMany({}, { session });
    await PasswordResetRequest.create([{ tokenId: token }], { session });

    await sendMailWithNodeMailer({
      to: [user.email],
      subject: "Reset your password",
      html: `
    <div style="font-family: sans-serif; font-weight: 600;">
        <p>Please <a href="${new URL(
          `/reset-password?token=${token}`,
          baseUrl
        )}">click here</a> to reset your panel password! This link is only valid for 10 minutes.</p>
    </div>`,
    });

    await session.commitTransaction();
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  } catch (error) {
    await session.abortTransaction();
    const redirectUrl = new URL("/error", baseUrl);
    return NextResponse.redirect(redirectUrl);
  } finally {
    await session.endSession();
  }
  const redirectUrl = new URL("/forget-password-confirmation", baseUrl);
  return NextResponse.redirect(redirectUrl);
};
