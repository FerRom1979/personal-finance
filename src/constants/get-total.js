import moment from "moment";

export const getTotal = (incomes) => {
  const today = moment();
  const dataDay = {};
  const dataMonth = {};
  let total = 0;
  let totalIncomesDay = 0;
  let totalExpensesDay = 0;
  let totalDay = 0;
  let totalIncomesMonth = 0;
  let totalIncome = 0;
  let totalExpenses = 0;
  incomes?.map((income) => {
    if (
      income.category === "incomes" &&
      moment(income.createdAt).format("dddd Do MMMM YYYY") == today.format("dddd Do MMMM YYYY")
    )
      totalIncomesDay += income.totalIncome;
    if (
      income.category === "expenses" &&
      moment(income.createdAt).format("dddd Do MMMM YYYY") == today.format("dddd Do MMMM YYYY")
    )
      dataDay.totalExpensesDay += income.totalIncome;

    if (income.category === "incomes") totalIncome += income.totalIncome;
    if (income.category === "expenses") totalExpenses += income.totalIncome;
  });
  return {
    dataDay: {
      totalIncomesDay,
      totalExpensesDay,
      totalDay: totalIncomesDay - totalExpensesDay,
    },
    total: totalIncome - totalExpenses,
  };
};
