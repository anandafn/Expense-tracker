import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //   props.expenses.forEach((exp) => {
  //     const expenseMonth = exp.date.getMonth(); // Give an index to the month starting from 0
  //     chartDataPoints[expenseMonth].value += exp.amount;
  //   });

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Give an index to the month starting from 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
