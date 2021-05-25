import { colors } from "./colors";

export const getColor = (color) => {
  switch (color) {
    case colors.BLUE:
      return "#2962ff";
    default:
      return "red";
  }
};
