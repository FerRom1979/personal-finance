import moment from "moment";

export const getTotalYear = (incomes, y = 0) => {
  const year = moment().subtract(y, "year").format("YYYY");
  let totalIncomes = 0;
  let totalExpenses = 0;

  incomes.map((income) => {
    if ((income.category === "incomes") & (moment(income.createdAt).format("YYYY") === year))
      totalIncomes += income.totalIncome;
    if ((income.category === "expenses") & (moment(income.createdAt).format("YYYY") === year))
      totalExpenses += income.totalIncome;
  });
  const incomesInfo = incomes.filter((income) => moment(income.createdAt).format("YYYY") == year);
  return {
    totalIncomes,
    totalExpenses,
    totalData: totalIncomes - totalExpenses,
    title: "Year summary",
    incomesInfo,
  };
};
