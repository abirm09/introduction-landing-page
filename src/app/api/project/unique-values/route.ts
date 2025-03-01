import { connectDB } from "@/lib";
import catchAsync from "@/lib/catchAsync";
import { SuccessResponse } from "@/lib/response";
import { Project } from "@/models/project.model";
import { NextRequest } from "next/server";

export const GET = catchAsync(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  let field = searchParams.get("field");

  const allowedFields = [
    "tags",
    "techStack",
    "keyFeatures",
    "challenges",
    "learnings",
  ];

  if (!field || !allowedFields.includes(field)) {
    field = "tags";
  }

  await connectDB();

  const uniqueValues = await Project.aggregate([
    { $unwind: `$${field}` }, // Flatten the array field
    { $group: { _id: `$${field}` } }, // Group by unique values
    { $project: { _id: 0, value: "$_id" } }, // Format the output
  ]);

  return SuccessResponse(200, "Unique values fetched successfully", {
    field,
    uniqueValues: uniqueValues.map((item) => item.value),
  });
});
