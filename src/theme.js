import { theme as chakraTheme } from "@chakra-ui/react";

const purple = {
  50: "#f0ebfd",
  100: "#cec7ea",
  200: "#aea2db",
  300: "#8d7dcc",
  400: "#6d58bd",
  500: "#543fa4",
  600: "#413180",
  700: "#2e225b",
  800: "#1c1538",
  900: "#090617",
};

export const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    purple,
  },
};
