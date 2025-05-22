import { ServiceClientType } from "@/consts/services";
import type { APIClient } from "@/types";
import { GRPCClient } from "@/clients/grpc";
import { HTTPClient } from "@/clients/http";

const activeServiceClient = useState<ServiceClientType>(
  "active-service-client",
);

export const getActiveServiceClient = (): APIClient => {
  let apiClient: APIClient;
  switch (activeServiceClient.value) {
    case ServiceClientType.GRPC:
      apiClient = useState("grpc-client", () => new GRPCClient()).value;
      break;
    case ServiceClientType.HTTP:
      apiClient = useState("http-client", () => new HTTPClient()).value;
      break;
  }
  return apiClient;
};
