import { TPasswordResetReq } from "@/types";
import { model, models, Schema } from "mongoose";

const PasswordResetRequestSchema = new Schema<TPasswordResetReq>(
  {
    requestId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const PasswordResetRequest =
  models.password_reset_request ||
  model<TPasswordResetReq>(
    "password_reset_request",
    PasswordResetRequestSchema
  );
