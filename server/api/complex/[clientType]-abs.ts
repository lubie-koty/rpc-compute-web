import { getActiveServiceClient } from "@/clients";
import type { UnaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const clientType = getRouterParam(event, "clientType");
  const client = getActiveServiceClient(clientType!);
  const { number: num } = await readBody<UnaryRequest>(event);
  return client.complex.abs(num);
});
