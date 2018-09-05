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

const ClassAttendancePresent = (props) => {
  const { data } = props;

  return (
    <ResponsiveContainer>
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
        <Bar dataKey="full" stackId="a" fill="#00ff00" />
        <Bar dataKey="partial" stackId="a" fill="#ffbf00" />
      </BarChart>
    </ResponsiveContainer>
  );
};

ClassAttendancePresent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ClassAttendancePresent;
