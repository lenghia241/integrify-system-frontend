import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';
import './index.css';

const ClassAttendanceWasPresent = (props) => {
  const { data, attendanceColorStyle } = props;

  return (
    <BarChart width={600} height={300} data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Bar dataKey="partial" stackId="a" fill="#ffbf00" />
      <Bar dataKey="full" stackId="a" fill="#00ff00" />
    </BarChart>
  );
};


ClassAttendanceWasPresent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  attendanceColorStyle: PropTypes.func.isRequired,
};

export default ClassAttendanceWasPresent;
