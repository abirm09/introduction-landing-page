import { connectDB, validateZodSchema } from "@/lib";
import ApiError from "@/lib/apiError";
import catchAsync from "@/lib/catchAsync";
import { SuccessResponse } from "@/lib/response";
import { Project } from "@/models/project.model";
import { TProject } from "@/types";
import {
  ProjectUpdateZodSchema,
  ProjectZodSchema,
} from "@/validations/projects.validate";
import { NextRequest } from "next/server";

export const POST = catchAsync(async (req: NextRequest) => {
  const body = await req?.json();

  const project = validateZodSchema(ProjectZodSchema, body) as TProject;

  await connectDB();

  const lastProjectOrder: TProject[] = await Project.find({}, { order: 1 })
    .sort({ createdAt: -1 })
    .limit(1);

  project.order = (lastProjectOrder[0]?.order || 0) + 1;

  await Project.create(project);

  return SuccessResponse(200, "Project created successfully");
});

export const GET = catchAsync(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  await connectDB();
  if (id) {
    const project = await Project.findOne({ _id: id, isActive: true }).sort({
      order: -1,
    });
    return SuccessResponse(200, "Projects fetched successfully", { project });
  } else {
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = parseInt(searchParams.get("skip") || "0");
    const projects = await Project.find({ isActive: true })
      .sort({ order: -1 })
      .skip(skip)
      .limit(limit);
    return SuccessResponse(200, "Projects fetched successfully", { projects });
  }
});

export const PATCH = catchAsync(async (req: NextRequest) => {
  const body = await req?.json();
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) throw new ApiError(400, "Project id is required");

  const project = validateZodSchema(ProjectUpdateZodSchema, body) as TProject;

  await connectDB();
  await Project.updateOne({ _id: id }, project);

  return SuccessResponse(200, "Project updated successfully");
});

export const DELETE = catchAsync(async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) throw new ApiError(400, "Project id is required");

  await connectDB();
  await Project.deleteOne({ _id: id });

  return SuccessResponse(200, "Project deleted successfully");
});
