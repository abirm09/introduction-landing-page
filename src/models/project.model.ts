import { TProject } from "@/types";
import { model, models, Schema } from "mongoose";

const ProjectsSchema = new Schema<TProject>(
  {
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
    },
    projectType: {
      type: String,
      enum: ["Web", "Mobile", "Desktop"],
    },
    links: [
      {
        name: {
          type: String,
        },
        link: {
          type: String,
        },
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    techStack: [
      {
        type: String,
      },
    ],
    keyFeatures: [
      {
        type: String,
      },
    ],
    challenges: [
      {
        type: String,
      },
    ],
    learnings: [
      {
        type: String,
      },
    ],
    screenshots: [
      {
        type: String,
      },
    ],
    videoLinks: [
      {
        link: {
          type: String,
        },
        order: {
          type: Number,
        },
      },
    ],
    externalLink: {
      type: String,
    },
    redirectToExternalLink: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      // default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);

export const Project =
  models.project || model<TProject>("project", ProjectsSchema);
