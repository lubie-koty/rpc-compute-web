interface FormInfo {
  label: string;
  args: string[];
}

export const formLabels: Record<string, FormInfo> = {
  sqrt: {
    label: "Square Root (√x)",
    args: ["Number"],
  },
  abs: {
    label: "Absolute Value (|x|)",
    args: ["Number"],
  },
  power: {
    label: "Exponentiation (xʸ)",
    args: ["Base (x)", "Exponent (y)"],
  },
  log: {
    label: "Logarithm (log base x of y)",
    args: ["Base (x)", "Value (y)"],
  },
  round: {
    label: "Round Number (Round x to y decimal places)",
    args: ["Number", "Decimal Places"],
  },
  rootmeansquare: {
    label: "Root Mean Square (RMS)",
    args: ["Values (comma-separated)"],
  },
  geometricmean: {
    label: "Geometric Mean",
    args: ["Values (comma-separated)"],
  },
  bodymassindex: {
    label: "Body Mass Index (BMI)",
    args: ["Weight (kg)", "Height (cm)"],
  },
  powerleveldiff: {
    label: "Power Level Difference",
    args: ["Initial Power Level", "Final Power Level"],
  },
  percentagevaluechange: {
    label: "Percentage Value Change",
    args: ["Original Value", "New Value"],
  },
  add: {
    label: "Addition (x + y)",
    args: ["Addend 1", "Addend 2"],
  },
  sub: {
    label: "Subtraction (x − y)",
    args: ["Minuend", "Subtrahend"],
  },
  mul: {
    label: "Multiplication (x × y)",
    args: ["Factor 1", "Factor 2"],
  },
  div: {
    label: "Division (x ÷ y)",
    args: ["Dividend", "Divisor"],
  },
};
