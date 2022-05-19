import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-moment";

Chart.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        // This more specific font property overrides the global property
        font: {
          size: 14,
        },
        color: "#fff",
      },
    },
    title: {
      display: true,
      text: "",
    },
    tooltip: {
      callbacks: {
        title: (context) => {
          return context[0].label.replace(", 12:00:00 am", ".");
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      // time: {
      //   unit: "day",
      // },
      grid: {
        display: false,
        // tickLength: 100,
      },
      ticks: {
        color: "#ffffff",
        callback: function (value, index, ticks) {
          let val = new Date(ticks[index].value).toString().split(" ");
          return val[1] + " " + val[3][2] + val[3][3];
        },
        autoSkip: true,
        maxTicksLimit: 5,
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      grid: {
        display: true,
        // tickLength: 100,
      },
      ticks: {
        color: "#ffffff",
      },
    },
  },
  maintainAspectRatio: false,
};

export default function App() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1__mppmDmjV_xjscE7OpUo7AXUsrPvQJI84agdc9LtBQ/1"
    )
      .then((response) => response.json())
      .then((rawResult) => {
        const result = rawResult.map((el) => ({
          date: el.date,
          nav: Number(el.nav),
          sp500: Number(el.sp500),
        }));
        console.log(result);
        const labels = result.map((el) => el.date);
        const datasets = [
          {
            label: "Hedonova",
            data: result.map((el) => el.nav),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            pointStyle: "circle",
            pointBorderWidth: 1,
            hideInLegendAndTooltip: false,
            borderWidth: 4,
            pointRadius: 1,
            color: "#fff",
          },
          {
            label: "S&P500",
            data: result.map((el) => el.sp500),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            pointStyle: "circle",
            borderWidth: 4,
            pointBorderWidth: 1,
            pointRadius: 1,
            color: "#fff",
          },
        ];
        setChartData({
          labels,
          datasets,
        });
      });
  }, []);
  return (
    <div style={{ height: "100vh", cursor: "pointer" }}>
      <Line options={options} data={chartData} />
    </div>
  );
}
