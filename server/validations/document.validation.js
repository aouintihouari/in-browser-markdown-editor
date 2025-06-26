import { z } from "zod";

export const documentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  content: z.string().trim().min(1, "Content is required").max(10000),
});
