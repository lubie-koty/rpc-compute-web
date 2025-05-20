interface FormInfo {
  label: string;
  args: string[];
}

export const formLabels: Record<string, FormInfo> = {
  sqrt: {
    label: "Square Root ( √x )",
    args: ["Number"],
  },
  abs: {
    label: "Absolute Value ( |x| )",
    args: ["Number"],
  },
  power: {
    label: "Exponentiation ( xʸ )",
    args: ["Base", "Exponent"],
  },
  log: {
    label: "Logarithm (log base x of y)",
    args: ["Base", "Value"],
  },
  round: {
    label: "Round Number (Round x to y decimal places)",
    args: ["Number", "Places"],
  },
  rms: {
    label: "Root Mean Square (RMS)",
    args: ["Number", "Number"],
  },
  gm: {
    label: "Geometric Mean",
    args: ["Number", "Number"],
  },
  bmi: {
    label: "Body Mass Index (BMI)",
    args: ["Weight (kg)", "Height (cm)"],
  },
  pld: {
    label: "Power Level Difference",
    args: ["Initial Level", "Final Level"],
  },
  pvc: {
    label: "Percentage Value Change",
    args: ["Original Value", "New Value"],
  },
  add: {
    label: "Addition (x + y)",
    args: ["Number", "Number"],
  },
  sub: {
    label: "Subtraction (x − y)",
    args: ["Number", "Number"],
  },
  mul: {
    label: "Multiplication (x × y)",
    args: ["Factor", "Factor"],
  },
  div: {
    label: "Division (x ÷ y)",
    args: ["Dividend", "Divisor"],
  },
};
