import React, { Component } from 'react';
import axios from 'axios';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';

import fiveDayData from './mock-data/fiveDayData.json';
import ChartClassPresence from '../../components/ChartClassPresence';

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
    const res = await axios.get('/api/attendance/history');
    const filteredData = this.dataFilter(res.data, '5b7ab1952cc5b5a552cfda72');
    this.setState({
      classHistoryData: filteredData,
      loading: false,
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
    const content = (
      <PageTemplate heading="Attendance">
        <div className="Attendance">
          {/* Render graphs only when loading of data is complete. */}
          {loading
            || <React.Fragment>
              <StudentAttendance
                data={classHistoryDataMock}
                week={this.getWeek(classHistoryDataMock[0].date)}
                loading={loading}
                attendanceColorStyle={this.attendanceColorStyle}
              />
              <StudentAttendance
                data={classHistoryData}
                week={this.getWeek(classHistoryData[0].date)}
                loading={loading}
                attendanceColorStyle={this.attendanceColorStyle}
              />
              <ChartClassPresence
                text="Chart Class Presence"
              />
            </React.Fragment>
          }
        </div>
      </PageTemplate>
    );
    return content;
  }
}
