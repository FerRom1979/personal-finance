import moment from "moment";

export const getTotalMonth = (incomes, mont = 0) => {
  const month = moment().subtract(mont, "month").format("MMMM YYYY");
  let totalIncomes = 0;
  let totalExpenses = 0;

  incomes.map((income) => {
    if ((income.category === "incomes") & (moment(income.createdAt).format("MMMM YYYY") === month))
      totalIncomes += income.totalIncome;
    if ((income.category === "expenses") & (moment(income.createdAt).format("MMMM YYYY") === month))
      totalExpenses += income.totalIncome;
  });
  const incomesInfo = incomes.filter(
    (income) => moment(income.createdAt).format("MMMM YYYY") == month
  );

  return {
    totalIncomes,
    totalExpenses,
    totalData: totalIncomes - totalExpenses,
    title: "Month summary",
    incomesInfo,
  };
};
