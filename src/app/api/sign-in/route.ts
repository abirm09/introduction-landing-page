import config from "@/config";
import connectDB from "@/lib/connectDB";
import { LoggedInSession } from "@/models/loggedInSession.model";
import { User } from "@/models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const formData = await req.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const baseUrl = req.headers.get("origin") || "http://localhost:3000";

  if (!email || !password) {
    return NextResponse.redirect(
      new URL("/dashboard?message=Invalid credential", baseUrl)
    );
  }

  await connectDB();
  const user = await User.findOne({ email });

  if (!user) {
    return NextResponse.redirect(
      new URL("/dashboard?message=Invalid credential", baseUrl)
    );
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return NextResponse.redirect(
      new URL("/dashboard?message=Invalid credential", baseUrl)
    );
  }

  const tokenId = new Types.ObjectId();

  await LoggedInSession.create({ tokenId });

  const token = jwt.sign({ tokenId }, config.token_secret, { expiresIn: "1d" });

  const redirectUrl = new URL("/dashboard", baseUrl);

  const response = NextResponse.redirect(redirectUrl);

  // Set the tokenId in an httpOnly cookie
  response.cookies.set(config.token_cookie_name, token.toString(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
  });

  return response;
};
