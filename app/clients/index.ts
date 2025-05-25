import { ServiceClientType } from "@/consts/services";
import type { APIClient } from "@/types";
import { GRPCClient } from "@/clients/grpc";
import { HTTPClient } from "@/clients/http";

export const getActiveServiceClient = (clientType: string): APIClient => {
  let apiClient: APIClient;
  switch (clientType) {
    case ServiceClientType.GRPC:
      apiClient = new GRPCClient();
      break;
    case ServiceClientType.HTTP:
      apiClient = new HTTPClient();
      break;
    default:
      apiClient = new GRPCClient();
      break;
  }
  return apiClient;
};
