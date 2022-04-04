import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="chart-container">
      <div>
        <h3 className="chart-title">MONTH WISE SELL</h3>
        <LineChart width={500} height={300} data={products}>
          <Line dataKey={"sell"}></Line>
          <XAxis dataKey="month"></XAxis>
          <Tooltip />
          <YAxis></YAxis>{" "}
        </LineChart>
      </div>

      <div>
        <h3 className="chart-title">Invesment VS Revenue</h3>
        <BarChart width={500} height={300} data={products}>
          <Bar dataKey="investment" fill="royalblue" />
          <Bar dataKey="revenue" fill="orange" />
          <XAxis dataKey="month"></XAxis>
          <Tooltip />
          <YAxis></YAxis>
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
