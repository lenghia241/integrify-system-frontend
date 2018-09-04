import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell,
} from 'recharts';
import PropTypes from 'prop-types';
import ChartToolTip from '../ChartToolTip';
import './index.css';

const StudentAttendance = (props) => {
  const {
    chartWidth, chartHeight, data, week, loading, attendanceColorStyle,
  } = props;
  if (!loading) {
    return (
      <div className="studentAttendance-container">
        <div>
          <ScatterChart
            width={chartWidth}
            height={chartHeight}
            margin={{
              top: 30,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <Scatter data={data} fill="#ff0000">
              {data.map(entry => (
                <Cell
                  key={`api-${entry.numId}`}
                  fill={attendanceColorStyle(entry.attendance)}
                />
              ))}
            </Scatter>
            <XAxis
              type="category"
              dataKey="dateDisplay"
              interval={0}
              tickLine={{ transform: 'translate(0, -3)' }}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="week"
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: `Week ${week}`, position: 'insideRight' }}
            />
            <ZAxis range={[700, 700]} />
            <Tooltip
              cursor={{ display: 'none' }}
              wrapperStyle={{ zIndex: 100 }}
              content={ChartToolTip}
            />
          </ScatterChart>
        </div>
      </div>
    );
  }

  return null;
};


StudentAttendance.propTypes = {
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  week: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  attendanceColorStyle: PropTypes.func.isRequired,
};

export default StudentAttendance;
