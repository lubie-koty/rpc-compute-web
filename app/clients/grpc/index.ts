import { CombinedComputeClient } from "@/clients/grpc/gen/service-combined.grpc-client";
import { ComplexComputeClient } from "@/clients/grpc/gen/service-complex.grpc-client";
import { SimpleComputeClient } from "@/clients/grpc/gen/service-simple.grpc-client";
import { GRPCCombinedServiceClient } from "@/clients/grpc/combined-client";
import { GRPCComplexServiceClient } from "@/clients/grpc/complex-client";
import { GRPCSimpleServiceClient } from "@/clients/grpc/simple-client";
import type {
  APIClient,
  CombinedServiceClient,
  ComplexServiceClient,
  SimpleServiceClient,
} from "@/types";
import { ChannelCredentials } from "@grpc/grpc-js";

const runtimeConfig = useRuntimeConfig();

export class GRPCClient implements APIClient {
  combined: CombinedServiceClient;
  complex: ComplexServiceClient;
  simple: SimpleServiceClient;

  constructor() {
    this.combined = new GRPCCombinedServiceClient(
      new CombinedComputeClient(
        runtimeConfig.serviceCombinedUrl as string,
        ChannelCredentials.createInsecure(),
      ),
    );
    this.complex = new GRPCComplexServiceClient(
      new ComplexComputeClient(
        runtimeConfig.serviceComplexUrl as string,
        ChannelCredentials.createInsecure(),
      ),
    );
    this.simple = new GRPCSimpleServiceClient(
      new SimpleComputeClient(
        runtimeConfig.serviceSimpleUrl as string,
        ChannelCredentials.createInsecure(),
      ),
    );
  }
}
