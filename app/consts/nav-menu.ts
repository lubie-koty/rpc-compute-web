export const navMenuItems = [
  [
    {
      label: "Menu",
      type: "label",
    },
    {
      label: "Home",
      icon: "material-symbols:home-outline-rounded",
      to: "/",
    },
    {
      label: "Simple",
      icon: "ph:math-operations",
      children: [
        {
          label: "Add",
          to: "/service-simple/add",
        },
        {
          label: "Subtract",
          to: "/service-simple/sub",
        },
        {
          label: "Multiply",
          to: "/service-simple/mul",
        },
        {
          label: "Divide",
          to: "/service-simple/div",
        },
      ],
    },
    {
      label: "Complex",
      icon: "tabler:math",
      children: [
        {
          label: "Square root",
          to: "/service-complex/sqrt",
        },
        {
          label: "Absolute value",
          to: "/service-complex/abs",
        },
        {
          label: "Exponentiation",
          to: "/service-complex/power",
        },
        {
          label: "Logarithm",
          to: "/service-complex/log",
        },
        {
          label: "Rounded value",
          to: "/service-complex/round",
        },
      ],
    },
    {
      label: "Combined",
      icon: "tabler:math-function",
      children: [
        {
          label: "Root mean square",
          to: "/service-combined/rms",
        },
        {
          label: "Geometric mean",
          to: "/service-combined/gm",
        },
        {
          label: "Body mass index",
          to: "/service-combined/bmi",
        },
        {
          label: "Sound power level",
          to: "/service-combined/pld",
        },
        {
          label: "Difference between values (%)",
          to: "/service-combined/pvc",
        },
      ],
    },
  ],
];
