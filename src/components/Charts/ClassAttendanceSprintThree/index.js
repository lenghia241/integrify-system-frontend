import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import ClassAttendanceSprintThreeChart from './ClassAttendanceSprintThreeChart';
import { data } from './mock-data-long-history.json';

const ClassAttendanceSprintThree = (props) => {
  const { chartWidth, chartHeight } = props;

  // const yesterday = dayjs(data[0].date).format('ddd D MMM');


  const filter = (length, start = 0) => data.slice(start, start + length);
  const newData = filter(5);

  return (
    <ClassAttendanceSprintThreeChart
        key="attendance0"
        data={newData}
        chartWidth={chartWidth}
        chartHeight={chartHeight}
    />
  );
};


ClassAttendanceSprintThree.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
};

export default ClassAttendanceSprintThree;
