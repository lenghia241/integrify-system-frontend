import React, { Component } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import ClassAttendancePresent from '../../components/Charts/ClassAttendancePresent';
import ClassAttendanceAbsent from '../../components/Charts/ClassAttendanceAbsent';
import ClassAttendanceMixed from '../../components/Charts/ClassAttendanceMixed';
import ClassAttendanceSprintThree from '../../components/Charts/ClassAttendanceSprintThree';
import PageGrid from '../../components/PageGrid';

import fiveDayData from './mock-data/fiveDayData.json';
import classHistory from './mock-data/classHistory.json';

dayjs.extend(weekOfYear);

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classHistoryData: {},
      classWasPresentData: [],
      loading: true,
      classHistoryDataMock: this.dataFilter(fiveDayData, '5b7ab1952cc5b5a552cfda72'),
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/attendance/history');
    const filteredData = this.dataFilter(res.data, '5b7c5ade5f49453eecccf351');
    const classWasPresentData = this.classAttendanceFilter(classHistory);
    this.setState({
      classHistoryData: filteredData,
      classWasPresentData,
      loading: false,
    });
  }

  classAttendanceFilter = (data) => {
    const newArray = [];
    data.map((date) => {
      let partial = 0;
      let full = 0;
      let absent = 0;
      let numId = 0;
      date.attendanceData.forEach((person) => {
        if (person.attendance === 'full') {
          full += 1;
        } else if (person.attendance === 'partial') {
          partial += 1;
        } else {
          absent += 1;
        }
      });
      newArray.push({
        name: date.date, dateDisplay: dayjs(date.date).format('ddd D MMM'), full, partial, absent, id: numId,
      });
      numId += 1;
    });
    return newArray.reverse();
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
    const {
      classHistoryData, classWasPresentData, loading, classHistoryDataMock,
    } = this.state;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const chartWidth = windowWidth > 992 ? windowWidth / 3 : windowWidth / 1.3;
    const chartHeight = windowWidth > 992 ? windowHeight / 3 : windowHeight / 2;
    const content = loading || [
      <StudentAttendance
          key="attendance0"
          chartWidth={chartWidth}
          chartHeight={chartHeight}
          data={classHistoryDataMock}
          week={this.getWeek(classHistoryDataMock[0].date)}
          loading={loading}
          attendanceColorStyle={this.attendanceColorStyle}
        />,
      <StudentAttendance
        key="attendance1"
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        data={classHistoryData}
        week={this.getWeek(classHistoryData[0].date)}
        loading={loading}
        attendanceColorStyle={this.attendanceColorStyle}
      />,
      <ClassAttendancePresent
        key="attendance2"
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        data={classWasPresentData}
      />,
      <ClassAttendanceAbsent
      key="attendance3"
      chartWidth={chartWidth}
      chartHeight={chartHeight}
      data={classWasPresentData}
    />,
    <ClassAttendanceMixed
    key="attendance4"
    chartWidth={chartWidth}
    chartHeight={chartHeight}
    data={classWasPresentData}
    />,
    <ClassAttendanceSprintThree
    key="attendance5"
    chartWidth={chartWidth}
    chartHeight={chartHeight}
    />,
    ];

    return (
      <PageTemplate heading="Attendance">
        <PageGrid content={loading ? null : content}/>
      </PageTemplate>
    );
  }
}
