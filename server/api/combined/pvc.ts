import { getActiveServiceClient } from "@/clients";
import type { BinaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { first_number: first, second_number: second } =
    await readBody<BinaryRequest>(event);
  return client.combined.pvc(first, second);
});
