import type { ISimpleComputeClient } from "@/clients/grpc/gen/service-simple.grpc-client";
import type { SimpleServiceClient } from "@/types";

export class GRPCSimpleServiceClient implements SimpleServiceClient {
  apiClient: ISimpleComputeClient;

  constructor(apiClient: ISimpleComputeClient) {
    this.apiClient = apiClient;
  }

  add(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.add({ numbers }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }

  sub(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.sub({ numbers }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }

  mul(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.mul({ numbers }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }

  div(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.div({ numbers }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }
}
