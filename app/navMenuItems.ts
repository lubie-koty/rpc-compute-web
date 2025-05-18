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
          to: "/math/service-simple/add",
        },
        {
          label: "Subtract",
          to: "/math/service-simple/sub",
        },
        {
          label: "Multiply",
          to: "/math/service-simple/mul",
        },
        {
          label: "Divide",
          to: "/math/service-simple/div",
        },
      ],
    },
    {
      label: "Complex",
      icon: "tabler:math",
      children: [
        {
          label: "Square root",
          to: "/math/service-complex/sqrt",
        },
        {
          label: "Absolute value",
          to: "/math/service-complex/abs",
        },
        {
          label: "Exponentiation",
          to: "/math/service-complex/power",
        },
        {
          label: "Logarithm",
          to: "/math/service-complex/log",
        },
        {
          label: "Rounded value",
          to: "/math/service-complex/round",
        },
      ],
    },
    {
      label: "Combined",
      icon: "tabler:math-function",
      children: [
        {
          label: "Root mean square",
          to: "/math/service-combined/rms",
        },
        {
          label: "Geometric mean",
          to: "/math/service-combined/gm",
        },
        {
          label: "Body mass index",
          to: "/math/service-combined/bmi",
        },
        {
          label: "Sound power level",
          to: "/math/service-combined/pld",
        },
        {
          label: "Difference between values (%)",
          to: "/math/service-combined/pvc",
        },
      ],
    },
  ],
];
