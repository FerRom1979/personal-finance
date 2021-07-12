import { colors } from "./colors";

export const getColor = (color) => {
  switch (color) {
    case colors.BLUE:
      return "#0099ff";
    case colors.BLACK:
      return "#1A1818";
    default:
      return "red";
  }
};
