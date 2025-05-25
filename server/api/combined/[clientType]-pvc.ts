import { getActiveServiceClient } from "@/clients";
import type { BinaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const clientType = getRouterParam(event, "clientType");
  const client = getActiveServiceClient(clientType!);
  const { first_number: first, second_number: second } =
    await readBody<BinaryRequest>(event);
  return client.combined.pvc(first, second);
});
