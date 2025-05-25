import { getActiveServiceClient } from "@/clients";
import type { RepeatedOperationRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const clientType = getRouterParam(event, "clientType");
  const client = getActiveServiceClient(clientType!);
  const { numbers } = await readBody<RepeatedOperationRequest>(event);
  return client.combined.rms(numbers);
});
