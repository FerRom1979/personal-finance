import { colors } from "./colors";

export const getColor = (color) => {
  switch (color) {
    case colors.BLUE:
      return "#0099ff";
    case colors.BLACK:
      return "#1A1818";
    case colors.GREEN:
      return "#43A854";
    case colors.VIOLET:
      return "#5B69E2";
    case colors.YELLOW:
      return "#FFD700";
    case colors.LIGHTBLUE:
      return "#0099FF";
    default:
      return "red";
  }
};
