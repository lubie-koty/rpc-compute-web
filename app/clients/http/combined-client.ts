import type { CombinedServiceClient, OperationResponse } from "@/types";
import { WebSocket } from "ws";

export class HTTPCombinedServiceClient implements CombinedServiceClient {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  rms(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://${this.apiUrl}/rms`);

      ws.on("open", () => {
        ws.send(JSON.stringify({ numbers }));
      });

      ws.on("message", (data) => {
        const response = JSON.parse(data.toString());
        ws.close();
        if (response?.error) {
          reject(response.error);
        }
        resolve(response?.result);
      });

      ws.on("error", (error) => {
        reject(error);
      });
    });
  }

  gm(numbers: number[]): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://${this.apiUrl}/gm`);

      ws.on("open", () => {
        ws.send(JSON.stringify({ numbers }));
      });

      ws.on("message", (data) => {
        const response = JSON.parse(data.toString());
        ws.close();
        if (response?.error) {
          reject(response.error);
        }
        resolve(response?.result);
      });

      ws.on("error", (error) => {
        reject(error);
      });
    });
  }

  bmi(weight: number, height: number): Promise<number | undefined> {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://${this.apiUrl}/bmi`);

      ws.on("open", () => {
        ws.send(
          JSON.stringify({
            first_number: weight,
            second_number: height,
          }),
        );
      });

      ws.on("message", (data) => {
        const response = JSON.parse(data.toString());
        ws.close();
        if (response?.error) {
          reject(response.error);
        }
        resolve(response?.result);
      });

      ws.on("error", (error) => {
        reject(error);
      });
    });
  }

  pld(initial: number, final: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/pld`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { first_number: initial, second_number: final },
    }).then((response) => response.result);
  }

  pvc(first: number, second: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/pvc`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { first_number: first, second_number: second },
    }).then((response) => response.result);
  }
}
