import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell,
} from 'recharts';

import './index.css';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import axios from 'axios';
import LocalDataChart from './LocalDataChart';

dayjs.extend(weekOfYear);

// Takes date and time and returns ISO date string.
// const dayjsBuild = (date, time) => dayjs(`${date}T${time}Z`);

// Takes date and returns week of the year.
const getWeek = date => dayjs(date).week();

const dataFilter = (json, id) => {
  const list = [];
  let numId = 0;
  json.forEach((day) => {
    day.attendanceData.forEach((entry) => {
      if (entry.studentId === id) {
        list.push({
          date: day.date,
          dateDisplay: dayjs(day.date).format('ddd D MMM'),
          timesStamp: entry.timesStamp,
          attendance: entry.attendance,
          index: 1,
          id: numId,
        });
      }
      numId += 1;
    });
  });
  return list.reverse();
};

export default class StudentAttendance extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await axios.get('https://integrify.network/api/attendance/history');
    const filteredData = dataFilter(res.data, '5b7ab1952cc5b5a552cfda72');
    this.setState({
      data: filteredData,
      loading: false,
    });
  }

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
                {data.timesStamp.timeIn}
              </p>
              <p>
                <span>Out: </span>
                {data.timesStamp.timeOut}
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
    const { data, loading } = this.state;
    const content = loading ? null : (
      <div className="studentAttendance-container">
        <LocalDataChart />
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
            <Scatter data={data} fill="#ff0000">
              {data.map(entry => (
                <Cell
                  key={`api-${entry.numId}`}
                  fill={this.attendanceColorStyle(entry.attendance)}
                />
              ))}
            </Scatter>
            <XAxis
              type="category"
              dataKey="dateDisplay"
              interval={0}
              tickLine={{ transform: 'translate(0, -3)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="week"
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: `Week ${getWeek(data[0].date)}`, position: 'insideRight' }}
            />
            <ZAxis range={[700, 700]} />
            <Tooltip
              cursor={{ display: 'none' }}
              wrapperStyle={{ zIndex: 100 }}
              content={this.renderTooltip}
            />
          </ScatterChart>
        </div>
      </div>
    );

    return content;
  }
}
