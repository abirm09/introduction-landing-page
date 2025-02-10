import { Document } from "mongoose";

type TPasswordResetReq = {
  requestId: string;
} & Document;

export type { TPasswordResetReq };
