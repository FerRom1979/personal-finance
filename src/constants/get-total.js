import moment from "moment";

export const getTotal = (incomes) => {
  const today = moment();
  let totalIncome = 0;
  let totalExpenses = 0;

  incomes?.map((income) => {
    if (income.category === "incomes") totalIncome += income.totalIncome;
    if (income.category === "expenses") totalExpenses += income.totalIncome;
  });
  return {
    total: totalIncome - totalExpenses,
    toDay: today,
  };
};
