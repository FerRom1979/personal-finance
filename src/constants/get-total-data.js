import { getTotalDay, getTotalMonth, getTotalYear } from ".";

export const getTotalData = (data, incomes, type = 0) => {
  if (data === "day") return getTotalDay(incomes, type);
  if (data === "month") return getTotalMonth(incomes, type);
  if (data === "year") return getTotalYear(incomes, type);
};
