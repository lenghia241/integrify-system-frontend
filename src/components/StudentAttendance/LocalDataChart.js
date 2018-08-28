import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell,
} from 'recharts';

import './index.css';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear);

const dataLocal = require('./fiveDayData').pastFiveDays;

// Takes date and time and returns ISO date string.
// const dayjsBuild = (date, time) => dayjs(`${date}T${time}Z`);

// Takes date and returns week of the year.
const getWeek = date => dayjs(date).week();

export default class LocalDataChart extends Component {
  // Determines color of cell in graph according to attendance status.
  attendanceColorStyle = (attendance) => {
    switch (attendance) {
      case 'full':
        return '#00ff00'; // Green
      case 'partial':
        return '#ffbf00'; // Orange
      case 'absent':
        return '#ff0000'; // Red
      default:
        return 'none';
    }
  };

  // Tool tip for hover effect on graph
  renderTooltip(props) {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div className="studentAttendance-chart-toolTip">
          {data.attendance !== 'absent' ? (
            <React.Fragment>
              <p>
                {data.attendance}
                <span> attendance</span>
              </p>
              <p>
                <span>In: </span>
                {data.timesStamp.time_in}
              </p>
              <p>
                <span>Out: </span>
                {data.timesStamp.time_out}
              </p>
            </React.Fragment>
          ) : (
            <p>{data.attendance}</p>
          )}
        </div>
      );
    }
    return null;
  }

  // returns a list of attendance objects if id matches. Temp use for filtering history data.

  render() {
    const content = (
      <div className="studentAttendance-container">
        <div>
          <ScatterChart
            width={500}
            height={80}
            margin={{
              top: 30,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <XAxis
              type="category"
              dataKey="date"
              interval={0}
              tickLine={{ transform: 'translate(0, -3)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="week12"
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: `Week ${getWeek(dataLocal[0].date)}`, position: 'insideRight' }}
            />
            <ZAxis range={[700, 700]} />
            <Tooltip
              // cursor={{ strokeDasharray: '3 3' }}
              cursor={{ display: 'none' }}
              wrapperStyle={{ zIndex: 100 }}
              content={this.renderTooltip}
            />
            <Scatter data={dataLocal} fill="#ff0000">
              {dataLocal.map(entry => (
                <Cell key={`nonApi-${entry.numId}`} fill={this.attendanceColorStyle(entry.attendance)} />
              ))}
            </Scatter>
          </ScatterChart>
        </div>
      </div>
    );
    return content;
  }
}
