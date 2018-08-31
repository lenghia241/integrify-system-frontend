import React, { Component } from 'react';
import axios from 'axios';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import PageGrid from '../../components/PageGrid';

import fiveDayData from './mock-data/fiveDayData.json';

dayjs.extend(weekOfYear);

export default class Attendance extends Component {
  constructor() {
    super();
    this.state = {
      classHistoryData: {},
      loading: true,
      classHistoryDataMock: this.dataFilter(fiveDayData, '5b7ab1952cc5b5a552cfda72'),
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/attendance/history');
    const filteredData = this.dataFilter(res.data, '5b7ab1952cc5b5a552cfda72');
    this.setState({
      classHistoryData: filteredData,
      loading: false,
    });
  }

  const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];

  classAttendanceFilter = (data) => {
    const newArray = [];    
    data.map((date) => {
      const partial = 0;
      const full = 0;
      if (date.attendanceData.attendance === 'full') {
        full++;
      } else if (date.attendanceData.attendance === 'partial') {
        partial++;
      }
      newArray.push({ name: date.date, partial, full });
    });
  }

  // Takes date and returns week of the year.
  getWeek = date => dayjs(date).week();

  dataFilter = (json, id) => {
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

  render() {
    const { classHistoryData, loading, classHistoryDataMock } = this.state;
    const content = loading || [<StudentAttendance
          key="attendance0"
          data={classHistoryDataMock}
          week={this.getWeek(classHistoryDataMock[0].date)}
          loading={loading}
          attendanceColorStyle={this.attendanceColorStyle}
        />,
      <StudentAttendance
        key="attendance1"
        data={classHistoryData}
        week={this.getWeek(classHistoryData[0].date)}
        loading={loading}
        attendanceColorStyle={this.attendanceColorStyle}
      />,
      <StudentAttendance
          key="attendance2"
          data={classHistoryDataMock}
          week={this.getWeek(classHistoryDataMock[0].date)}
          loading={loading}
          attendanceColorStyle={this.attendanceColorStyle}
        />,
      <StudentAttendance
        key="attendance3"
        data={classHistoryData}
        week={this.getWeek(classHistoryData[0].date)}
        loading={loading}
        attendanceColorStyle={this.attendanceColorStyle}
      />,
    ];
    return (
      <PageTemplate heading="Attendance">
        <PageGrid content={loading ? null : content}/>
      </PageTemplate>
    );
  }
}
