import moment from "moment";

export const getTotalMonth = (incomes, mont = 0) => {
  const month = moment().subtract(mont, "month").format("MMMM YYYY");
  let totalIncomesMonth = 0;
  let totalExpensesMonth = 0;
  let totalMonth = 0;

  incomes.map((income) => {
    if ((income.category === "incomes") & (moment(income.createdAt).format("MMMM YYYY") === month))
      totalIncomesMonth += income.totalIncome;
    if ((income.category === "expenses") & (moment(income.createdAt).format("MMMM YYYY") === month))
      totalExpensesMonth += income.totalIncome;
  });

  return {
    totalIncomesMonth,
    totalExpensesMonth,
    totalMonth: totalIncomesMonth - totalExpensesMonth,
  };
};
