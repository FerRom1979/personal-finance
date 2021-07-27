import moment from "moment";

export const getTotalDay = (incomes) => {
  const today = moment();
  let totalIncomes = 0;
  let totalExpenses = 0;

  incomes?.map((income) => {
    if (
      income.category === "incomes" &&
      moment(income.createdAt).format("dddd Do MMMM YYYY") == today.format("dddd Do MMMM YYYY")
    )
      totalIncomes += income.totalIncome;
    if (
      income.category === "expenses" &&
      moment(income.createdAt).format("dddd Do MMMM YYYY") == today.format("dddd Do MMMM YYYY")
    )
      totalExpenses += income.totalIncome;
  });
  const incomesInfo = incomes.filter(
    (income) =>
      moment(income.createdAt).format("dddd Do MMMM YYYY") === today.format("dddd Do MMMM YYYY")
  );
  return {
    totalIncomes,
    totalExpenses,
    totalData: totalIncomes - totalExpenses,
    title: "Daily summary",
    incomesInfo,
  };
};
