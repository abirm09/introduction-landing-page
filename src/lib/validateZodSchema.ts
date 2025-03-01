import { ZodSchema } from "zod";

export function validateZodSchema<T>(schema: ZodSchema<T>, data: unknown) {
  return schema.parse(data);
}
