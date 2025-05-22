import { getActiveServiceClient } from "@/clients";
import type { BinaryRequest } from "@/types";

export default defineEventHandler(async (event) => {
  const client = getActiveServiceClient();
  const { first_number: weight, second_number: height } =
    await readBody<BinaryRequest>(event);
  return client.combined.bmi(weight, height);
});
