export interface CombinedServiceClient {
  rms(numbers: number[]): Promise<number | undefined>;
  gm(numbers: number[]): Promise<number | undefined>;
  bmi(weight: number, height: number): Promise<number | undefined>;
  pld(initial: number, final: number): Promise<number | undefined>;
  pvc(first: number, second: number): Promise<number | undefined>;
}

export interface ComplexServiceClient {
  sqrt(num: number): Promise<number | undefined>;
  abs(num: number): Promise<number | undefined>;
  power(base: number, exponent: number): Promise<number | undefined>;
  log(base: number, value: number): Promise<number | undefined>;
  round(num: number, places: number): Promise<number | undefined>;
}

export interface SimpleServiceClient {
  add(numbers: number[]): Promise<number | undefined>;
  sub(numbers: number[]): Promise<number | undefined>;
  mul(numbers: number[]): Promise<number | undefined>;
  div(numbers: number[]): Promise<number | undefined>;
}

export interface APIClient {
  combined: CombinedServiceClient;
  complex: ComplexServiceClient;
  simple: SimpleServiceClient;
}

export interface OperationResponse {
  result: number | undefined;
}

export interface RepeatedOperationRequest {
  numbers: number[];
}

export interface UnaryRequest {
  number: number;
}

export interface BinaryRequest {
  first_number: number;
  second_number: number;
}
