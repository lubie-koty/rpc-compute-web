import { getActiveServiceClient } from "@/clients";
import type { RepeatedOperationRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { numbers } = await readBody<RepeatedOperationRequest>(event);
  return client.simple.mul(numbers);
});
