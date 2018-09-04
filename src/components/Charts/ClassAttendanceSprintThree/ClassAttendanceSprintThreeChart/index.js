import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const ClassAttendanceSprintThree = (props) => {
  const { data, chartWidth, chartHeight } = props;

  return (
    <BarChart width={chartWidth} height={chartHeight} data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis
        dataKey="dateDisplay"
        angle={-45}
        textAnchor="end"
        height={100} />
      <YAxis/>
      <Tooltip/>
      <Legend/>
      <Bar dataKey="full" stackId="a" fill="#00ff00" />
      <Bar dataKey="partial" stackId="a" fill="#ffbf00" />
    </BarChart>
  );
};


ClassAttendanceSprintThree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
};

export default ClassAttendanceSprintThree;
