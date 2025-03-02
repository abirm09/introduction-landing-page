import { z } from "zod";

const ImageGallerySchema = z.object({
  title: z.string().optional(),
  image: z.string().optional(),
  shortDesc: z.string().optional(),
  longDesc: z.string().optional(),
});

const SkillSchema = z.object({
  name: z.string(),
  percentage: z.number().min(0).max(100),
  thumb: z.string(),
  level: z.string(),
});

const ToolSchema = z.object({
  name: z.string(),
  thumb: z.string(),
});

const ContactSchema = z.object({
  email: z.string().email().optional(),
  whatsApp: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
});

const SocialSchema = z.object({
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  instagram: z.string().url().optional(),
});

const SiteDataSchema = z.object({
  name: z.string().optional(),
  logo: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
});

const GeneralZodSchema = z.object({
  name: z.string(),
  title: z.string(),
  bio: z.string().optional(),
  about: z.string().optional(),
  profilePic: z.string(),
  imageGallery: z.array(ImageGallerySchema).optional(),
  resume: z.string(),
  contact: ContactSchema.optional(),
  social: SocialSchema.optional(),
  skills: z.array(SkillSchema),
  toots: z.array(ToolSchema),
  siteData: SiteDataSchema,
});

export { GeneralZodSchema };
