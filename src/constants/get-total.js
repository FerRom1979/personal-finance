export const getTotal = (incomes) => {
  let total = 0;
  incomes?.map((income) => {
    if (income.category === "incomes") total += income.totalIncome;
    if (income.category === "expenses") total -= income.totalIncome;
  });
  return total;
};
