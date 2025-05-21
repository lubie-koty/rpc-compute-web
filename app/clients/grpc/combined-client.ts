import type { ICombinedComputeClient } from "@/clients/grpc/gen/service-combined.grpc-client";
import type { CombinedServiceClient } from "@/types";

export class GRPCCombinedServiceClient implements CombinedServiceClient {
  apiClient: ICombinedComputeClient;

  constructor(apiClient: ICombinedComputeClient) {
    this.apiClient = apiClient;
  }

  rms(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const call = this.apiClient.rootMeanSquare((error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.result);
      });

      call.on("error", reject);
      const ok = call.write({ numbers });
      if (!ok) {
        call.end();
        reject(new Error("Failed to write message"));
      }
      call.end();
    });
  }

  gm(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const call = this.apiClient.geometricMean({ numbers });

      let result: number | undefined;
      call.on("data", (response) => {
        result = response.result;
      });
      call.on("end", () => {
        resolve(result);
      });
      call.on("error", reject);
    });
  }

  bmi(weight: number, height: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const call = this.apiClient.bodyMassIndex();

      let result: number | undefined;
      call.on("data", (response) => {
        result = response.result;
      });
      call.on("end", () => {
        resolve(result);
      });
      call.on("error", reject);
      const ok = call.write({ firstNumber: weight, secondNumber: height });
      if (!ok) {
        call.end();
        reject(new Error("Failed to write message"));
      }
    });
  }

  pld(initial: number, final: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.powerLevelDiff(
        { firstNumber: initial, secondNumber: final },
        (err, response) => {
          if (err) {
            reject(err);
          }
          resolve(response?.result);
        },
      );
    });
  }

  pvc(first: number, second: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      this.apiClient.powerLevelDiff(
        { firstNumber: first, secondNumber: second },
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
