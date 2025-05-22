import { getActiveServiceClient } from "@/clients";
import type { BinaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { first_number: base, second_number: exponent } =
    await readBody<BinaryRequest>(event);
  return client.complex.power(base, exponent);
});
