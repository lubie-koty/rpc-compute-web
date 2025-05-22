import type { SimpleServiceClient, OperationResponse } from "@/types";

export class HTTPSimpleServiceClient implements SimpleServiceClient {
  private readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  add(numbers: number[]): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { numbers },
    }).then((response) => response.result);
  }

  sub(numbers: number[]): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/sub`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { numbers },
    }).then((response) => response.result);
  }

  mul(numbers: number[]): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/mul`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { numbers },
    }).then((response) => response.result);
  }

  div(numbers: number[]): Promise<number | undefined> {
    return $fetch<OperationResponse>(`http://${this.apiUrl}/div`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { numbers },
    }).then((response) => response.result);
  }
}
