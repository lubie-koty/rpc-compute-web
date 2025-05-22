import { getActiveServiceClient } from "@/clients";
import type { BinaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { first_number: num, second_number: places } =
    await readBody<BinaryRequest>(event);
  return client.complex.round(num, places);
});
