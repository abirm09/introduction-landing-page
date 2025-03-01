import { z } from "zod";

const ProjectLinksZodSchema = z.object({
  name: z.string(),
  link: z.string(),
});

const ProjectTypeZodSchema = z.enum(["Web", "Mobile", "Desktop"]);

const ProjectVideoLinksZodSchema = z.object({
  link: z.string(),
  order: z.number(),
});

const ProjectZodSchema = z.object({
  name: z.string({ required_error: "Project name is required" }),
  thumbnail: z.string({ required_error: "Thumbnail image is required" }),
  shortDescription: z.string().optional(),
  description: z.string().optional(),
  projectType: ProjectTypeZodSchema.optional(),
  links: z.array(ProjectLinksZodSchema).optional(),
  isActive: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  techStack: z.array(z.string()).optional(),
  keyFeatures: z.array(z.string()).optional(),
  challenges: z.array(z.string()).optional(),
  learnings: z.array(z.string()).optional(),
  screenshots: z.array(z.string()).optional(),
  videoLinks: z.array(ProjectVideoLinksZodSchema).optional(),
  externalLink: z.string().optional(),
  redirectToExternalLink: z.boolean().optional().default(false),
  order: z.number().optional(),
});

const ProjectUpdateZodSchema = ProjectZodSchema.partial();

export {
  ProjectLinksZodSchema,
  ProjectTypeZodSchema,
  ProjectUpdateZodSchema,
  ProjectVideoLinksZodSchema,
  ProjectZodSchema,
};
