import { connectDB } from "@/lib";
import catchAsync from "@/lib/catchAsync";
import { SuccessResponse } from "@/lib/response";
import { General } from "@/models";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const GET = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const general = (await General.find({}).limit(1))[0];

  return SuccessResponse(200, "General data retrieved successfully!", general);
});

export const PATCH = catchAsync(async (req: NextRequest) => {
  const body = await req?.json();

  await connectDB();
  await General.updateMany({}, body);

  revalidateTag("general");

  return SuccessResponse(200, "General data updated successfully");
});
