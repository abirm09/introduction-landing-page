import { TGeneral } from "@/types";
import { model, models, Schema } from "mongoose";

const GeneralSchema = new Schema<TGeneral>(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String },
    about: { type: String },
    profilePic: { type: String, required: true },
    imageGallery: [
      {
        title: { type: String },
        image: { type: String },
        shortDesc: { type: String },
        longDesc: { type: String },
      },
    ],
    resume: { type: String, required: true },
    contact: {
      email: { type: String },
      whatsApp: { type: String },
      address: { type: String },
      city: { type: String },
      state: { type: String },
      zip: { type: String },
      country: { type: String },
    },
    social: {
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      instagram: { type: String },
    },
    skills: [
      {
        name: { type: String, required: true },
        percentage: { type: Number, required: true },
        thumb: { type: String, required: true },
        level: { type: String, required: true },
      },
    ],
    toots: [
      {
        name: { type: String, required: true },
        thumb: { type: String, required: true },
      },
    ],
    siteData: {
      name: { type: String },
      logo: { type: String },
      title: { type: String },
      description: { type: String },
    },
    seoData: {
      title: { type: String },
      description: { type: String },
      keywords: [{ type: String }],
      openGraph: {
        description: { type: String },
        imagesUrl: { type: String },
      },
      siteUrl: { type: String },
    },
  },
  { timestamps: true, versionKey: false }
);

export const General =
  models.general || model<TGeneral>("general", GeneralSchema);
