import { getActiveServiceClient } from "@/clients";
import type { UnaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { number: num } = await readBody<UnaryRequest>(event);
  return client.complex.sqrt(num);
});
