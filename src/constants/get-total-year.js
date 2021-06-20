import moment from "moment";

export const getTotalYear = (incomes, y = 0) => {
  const year = moment().subtract(y, "year").format("YYYY");
  let totalIncomesYear = 0;
  let totalExpensesYear = 0;
  let totalYear = 0;

  incomes.map((income) => {
    if ((income.category === "incomes") & (moment(income.createdAt).format("YYYY") === year))
      totalIncomesYear += income.totalIncome;
    if ((income.category === "expenses") & (moment(income.createdAt).format("YYYY") === year))
      totalExpensesYear += income.totalIncome;
  });

  return {
    totalIncomesYear,
    totalExpensesYear,
    totalYear: totalIncomesYear - totalExpensesYear,
  };
};
