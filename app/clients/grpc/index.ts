import { CombinedComputeClient } from "@/clients/grpc/gen/service-combined.grpc-client";
import type { ICombinedComputeClient } from "@/clients/grpc/gen/service-combined.grpc-client";
import { ComplexComputeClient } from "@/clients/grpc/gen/service-complex.grpc-client";
import type { IComplexComputeClient } from "@/clients/grpc/gen/service-complex.grpc-client";
import { SimpleComputeClient } from "@/clients/grpc/gen/service-simple.grpc-client";
import type { ISimpleComputeClient } from "@/clients/grpc/gen/service-simple.grpc-client";

import { ChannelCredentials } from "@grpc/grpc-js";

const runtimeConfig = useRuntimeConfig();

export class GRPCClient {
  combined: ICombinedComputeClient;
  complex: IComplexComputeClient;
  simple: ISimpleComputeClient;

  constructor() {
    this.combined = new CombinedComputeClient(
      runtimeConfig.serviceCombinedUrl as string,
      ChannelCredentials.createInsecure(),
    );
    this.complex = new ComplexComputeClient(
      runtimeConfig.serviceComplexUrl as string,
      ChannelCredentials.createInsecure(),
    );
    this.simple = new SimpleComputeClient(
      runtimeConfig.serviceSimpleUrl as string,
      ChannelCredentials.createInsecure(),
    );
  }
}
