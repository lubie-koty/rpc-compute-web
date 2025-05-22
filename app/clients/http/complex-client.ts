import type { ComplexServiceClient, OperationResponse } from "@/types";

export class HTTPComplexServiceClient implements ComplexServiceClient {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  sqrt(num: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/sqrt`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { number: num },
    }).then((response) => response.result);
  }

  abs(num: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/abs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { number: num },
    }).then((response) => response.result);
  }

  power(base: number, exponent: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/power`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { first_number: base, second_number: exponent },
    }).then((response) => response.result);
  }

  log(base: number, value: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/log`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { first_number: base, second_number: value },
    }).then((response) => response.result);
  }

  round(num: number, places: number): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/round`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { first_number: num, second_number: places },
    }).then((response) => response.result);
  }
}
