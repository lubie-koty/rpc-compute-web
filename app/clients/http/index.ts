import { HTTPCombinedServiceClient } from "@/clients/http/combined-client";
import { HTTPComplexServiceClient } from "@/clients/http/complex-client";
import { HTTPSimpleServiceClient } from "@/clients/http/simple-client";
import type {
  APIClient,
  CombinedServiceClient,
  ComplexServiceClient,
  SimpleServiceClient,
} from "@/types";

const runtimeConfig = useRuntimeConfig();

export class HTTPClient implements APIClient {
  combined: CombinedServiceClient;
  complex: ComplexServiceClient;
  simple: SimpleServiceClient;

  constructor() {
    this.combined = new HTTPCombinedServiceClient(
      runtimeConfig.HTTPServiceCombinedUrl as string,
    );
    this.complex = new HTTPComplexServiceClient(
      runtimeConfig.HTTPServiceComplexUrl as string,
    );
    this.simple = new HTTPSimpleServiceClient(
      runtimeConfig.HTTPServiceSimpleUrl as string,
    );
  }
}
