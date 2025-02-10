import { Document } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
} & Document;

export type { TUser };
