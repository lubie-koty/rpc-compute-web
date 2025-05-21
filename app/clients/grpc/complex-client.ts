import type { IComplexComputeClient } from "@/clients/grpc/gen/service-complex.grpc-client";
import type { ComplexServiceClient } from "@/types";

export class GRPCComplexServiceClient implements ComplexServiceClient {
  apiClient: IComplexComputeClient;

  constructor(apiClient: IComplexComputeClient) {
    this.apiClient = apiClient;
  }

  sqrt(num: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.sqrt({ number: num }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }

  abs(num: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.abs({ number: num }, (err, response) => {
        if (err) {
          reject(err);
        }
        resolve(response?.result);
      });
    });
  }

  power(base: number, exponent: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.power(
        { firstNumber: base, secondNumber: exponent },
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response?.result);
        },
      );
    });
  }

  log(base: number, value: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.log(
        { firstNumber: base, secondNumber: value },
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response?.result);
        },
      );
    });
  }

  round(num: number, places: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.round(
        { firstNumber: num, secondNumber: places },
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response?.result);
        },
      );
    });
  }
}
