import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
} from 'recharts';
import PropTypes from 'prop-types';
import './index.css';

const ClassAttendanceAbsent = (props) => {
  const { data, chartWidth } = props;

  return (
    <BarChart width={chartWidth} height={380} data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis
        dataKey="dateDisplay"
        angle={-45}
        textAnchor="end"
        height={100}/>
      <YAxis/>
      <Tooltip/>
      <Legend />
      {/* <Brush dataKey="dateDisplay" height={20} stroke="#8884d8"/> */}
      <Bar dataKey="absent" fill="#ff0000" />
    </BarChart>
  );
};


ClassAttendanceAbsent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  chartWidth: PropTypes.string.isRequired,
};

export default ClassAttendanceAbsent;
