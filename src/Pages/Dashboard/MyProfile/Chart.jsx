import { useState, useEffect } from "react";
import { PieChart, Pie, Legend } from "recharts";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Box } from "@mui/material";
// import SectionTitle from "./Utiles/SetTheme/SectionTitle/SectionTitle";

const Chart = ({ total, win }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const updatedPieChartData = [
      { name: "win", value: win, fill: "green" },
      { name: "loss", value: total - win, fill: "red" },
    ];

    setPieChartData(updatedPieChartData);
  }, [total, win]); // Re-run effect when total or yes changes

  return (
    <div>
      <SectionTitle heading={"winning Chart"}></SectionTitle>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx={200}
            cy={160}
            innerRadius={0}
            outerRadius={130}
            paddingAngle={0}
          />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{
              position: "absolute",
              bottom: 0,
              left: 10,
            }}
            data={[
              { name: "win", value: "green", type: "square" },
              { name: "loss", value: "red", type: "square" },
            ]}
          />
        </PieChart>
      </div>
    </div>
  );
};

Chart.propTypes = {
  total: PropTypes.number.isRequired,
  win: PropTypes.number.isRequired,
};

export default Chart;
