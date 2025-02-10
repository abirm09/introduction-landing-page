import { Document } from "mongoose";

export type TLoggedInSession = {
  tokenId: string;
} & Document;
