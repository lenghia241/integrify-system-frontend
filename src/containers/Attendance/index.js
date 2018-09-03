import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import { fetchClassAttendance as fetchClassAttendanceAction } from '../../store/actions';

import { getId, getClassAttendance } from '../../store/reducers/index';

import fiveDayData from './mock-data/fiveDayData.json';
import ChartClassPresence from '../../components/ChartClassPresence';

dayjs.extend(weekOfYear);

class Attendance extends Component {
  constructor() {
    super();
    this.state = {
      classHistoryData: [],
      loading: true,
      classHistoryDataMock: this.studentAttendanceDataFilter(
        fiveDayData,
        '5b7ab1952cc5b5a552cfda72',
      ),
      classAttendanceTest: [],
    };
  }

  async componentDidMount() {
    const { userId, fetchClassAttendance, classAttendance } = this.props;
    fetchClassAttendance();
    const dataFromStore = classAttendance.class;

    const res = await axios.get('/api/v1/attendance/history');
    const filteredData = this.studentAttendanceDataFilter(
      res.data,
      userId || '5b7c5ade5f49453eecccf351',
    );

    console.log('props: ', this.props);
    console.log('userId: ', userId);
    console.log('state: ', this.state);
    this.setState({
      classHistoryData: filteredData,
      loading: classAttendance.loading,
      classAttendanceTest: dataFromStore,
    });
  }

  // Takes date and returns week of the year.
  getWeek = date => dayjs(date).week();

  studentAttendanceDataFilter = (json, id) => {
    const list = [];
    let numId = 0;
    json.forEach((day) => {
      day.attendanceData.forEach((entry) => {
        if (entry.studentId === id) {
          const weekNum = this.getWeek(day.date);
          const { timesStamp, attendance } = entry;

          list.push({
            date: day.date,
            dateDisplay: dayjs(day.date).format('ddd D MMM'),
            timesStamp,
            attendance,
            index: weekNum,
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
    const { userId, classAttendance } = this.props;


    // getClassAttendance(); // => this.props.getClassAttendance(); Cai nay no dung de test thoi
    const content = (
      <PageTemplate heading="Attendance">
        <div className="Attendance">
          {/* Render graphs only when loading of data is complete. */}
          {classAttendance.loading || (
            <React.Fragment>
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
              <ChartClassPresence text="Chart Class Presence" />
            </React.Fragment>
          )}
        </div>
      </PageTemplate>
    );
    return content;
  }
}

// const mapDispatchToProps = dispatch => ({
//   classAttendance: data => dispatch({ type: GET_CLASS_ATTENDANCE, data })
// });

const mapStateToProps = state => ({
  userId: getId(state),
  classAttendance: getClassAttendance(state),
});

export default connect(
  mapStateToProps,
  { fetchClassAttendance: fetchClassAttendanceAction },
)(Attendance);
