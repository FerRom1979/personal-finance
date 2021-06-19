import { colors } from "./colors";

export const getColor = (color) => {
  switch (color) {
    case colors.BLUE:
      return "#0099ff";
    default:
      return "red";
  }
};
