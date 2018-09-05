import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import axios from 'axios';

import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import { fetchClassAttendance as fetchClassAttendanceAction } from '../../store/actions';

import { getId, getClassAttendance } from '../../store/reducers/index';

import fiveDayData from './mock-data/fiveDayData.json';
import ChartClassPresence from '../../components/ChartClassPresence';

dayjs.extend(weekOfYear);

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // UN-COMMENT OUT if you require classHistoryData
      // classHistoryData: {},
      studentHistoryData: {},
      loading: true,
      studentHistoryDataMock: fiveDayData,
    };
  }

  async componentDidMount() {
    const { fetchClassAttendance, userId = '5b7c5ade5f49453eecccf351' } = this.props;
    fetchClassAttendance();

    // only works with week 33
    const fetchStudentHistoryData = await axios.get(`/api/v2/attendance/history/students/${userId}/weeks/33 `);

    this.setState({
      // UN-COMMENT OUT if you require classHistoryData
      // classHistoryData: classAttendance,
      studentHistoryData: fetchStudentHistoryData.data,
      loading: false,
    });
  }

  // UN-COMMENT OUT if you require classHistoryData
  // static getDerivedStateFromProps(props, state) {
  //   if (!state.classHistoryData.loading === props.classAttendance.loading) {
  //     return {
  //       classHistoryData: props.classAttendance,
  //       loading: false,
  //     };
  //   }
  //   return null;
  // }

  getWeek = date => dayjs(date).week();

  stdAtndDataManip = (data) => {
    if (!data) {
      return '';
    }
    const list = [];
    let numId = 0;
    data.forEach((day) => {
      const { date, timestamp, attendance } = day;
      const weekNum = this.getWeek(date);

      list.push({
        date,
        dateDisplay: dayjs(day.date).format('ddd D MMM'),
        timestamp,
        attendance,
        index: weekNum,
        id: numId,
      });
      numId += 1;
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
    const { loading, studentHistoryDataMock, studentHistoryData } = this.state;

    const studentAttendanceData = this.stdAtndDataManip(studentHistoryData.attendanceData);
    const studentAttendanceDataMock = this.stdAtndDataManip(studentHistoryDataMock.attendanceData);

    const content = (
      <PageTemplate heading="Attendance">
        <div className="Attendance">
          {/* Render graphs only when loading of data is complete. */}
            <React.Fragment>
              <StudentAttendance
                data={studentAttendanceDataMock}
                week={this.getWeek(studentAttendanceDataMock[0].date)}
                loading={loading}
                attendanceColorStyle={this.attendanceColorStyle}
              />
              {studentAttendanceData && (
                <StudentAttendance
                  data={studentAttendanceData}
                  week={this.getWeek(studentAttendanceData[0].date)}
                  loading={loading}
                  attendanceColorStyle={this.attendanceColorStyle}
                />
              )}
              <ChartClassPresence text="Chart Class Presence" />
            </React.Fragment>
        </div>
      </PageTemplate>
    );
    return content;
  }
}

const mapStateToProps = state => ({
  userId: getId(state),
  classAttendance: getClassAttendance(state),
});

Attendance.propTypes = {
  userId: PropTypes.string.isRequired,
  classAttendance: PropTypes.shape({}).isRequired,
  fetchClassAttendance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchClassAttendance: fetchClassAttendanceAction },
)(Attendance);
