import "./Chart.css";
import BarChart from "./BarChart";

const Chart = (props) => {
  // Getting the biggest value among all the months
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const getMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <BarChart
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={getMaxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
