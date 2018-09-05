import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const ClassAttendanceMixed = (props) => {
  const { data, chartWidth, chartHeight } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dateDisplay" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Brush dataKey="dateDisplay" height={20} stroke="#8884d8" /> */}
        <Bar dataKey="full" stackId="a" fill="#00ff00" />
        <Bar dataKey="partial" stackId="a" fill="#ffbf00" />
        <Bar dataKey="absent" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

ClassAttendanceMixed.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
};

export default ClassAttendanceMixed;
