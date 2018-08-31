import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
} from 'recharts';
import PropTypes from 'prop-types';
import './index.css';

const ClassAttendancePresent = (props) => {
  const { data } = props;

  return (
    <BarChart width={600} height={300} data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="dateDisplay"/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      <Brush dataKey="dateDisplay" height={20} stroke="#8884d8" width={370} />
      <Bar dataKey="full" stackId="a" fill="#00ff00" />
      <Bar dataKey="partial" stackId="a" fill="#ffbf00" />
    </BarChart>
  );
};


ClassAttendancePresent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ClassAttendancePresent;
