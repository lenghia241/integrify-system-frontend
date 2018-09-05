import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import axios from 'axios';

import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import classHistory from './mock-data/classHistory';
import ClassAttendancePresent from '../../components/Charts/ClassAttendancePresent';
import ClassAttendanceAbsent from '../../components/Charts/ClassAttendanceAbsent';
import ClassAttendanceMixed from '../../components/Charts/ClassAttendanceMixed';
import ClassAttendanceHundredPerc from '../../components/Charts/ClassAttendanceHundredPerc';
import ClassAttendanceSprintThree from '../../components/Charts/ClassAttendanceSprintThree';
import PageGrid from '../../components/PageGrid';

import fiveDayData from './mock-data/fiveDayData.json';
import { fetchClassAttendance as fetchClassAttendanceAction } from '../../store/actions';

import { getId, getClassAttendance } from '../../store/reducers/index';

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
    const fetchStudentHistoryData = await axios.get(
      `/api/v2/attendance/history/students/${userId}/weeks/33 `,
    );

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

  chartPresentFilter = (data) => {
    const newArray = [];
    data.map((day) => {
      let partial = 0;
      let full = 0;
      let absent = 0;
      let numId = 0;
      day.attendanceData.forEach((person) => {
        if (person.attendance === 'full') {
          full += 1;
        } else if (person.attendance === 'partial') {
          partial += 1;
        } else {
          absent += 1;
        }
      });
      newArray.push({
        name: day.date,
        dateDisplay: dayjs(day.date).format('ddd D MMM'),
        full,
        partial,
        absent,
        id: numId,
      });
      numId += 1;
    });
    return newArray.reverse();
  };

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
    console.log(studentAttendanceDataMock);

    const content = [
      <StudentAttendance
        key="attendance0"
        data={studentAttendanceDataMock}
        week={this.getWeek(studentAttendanceDataMock[0].date)}
        loading={loading}
        attendanceColorStyle={this.attendanceColorStyle}
      />,
      studentAttendanceData && (
        <StudentAttendance
          key="attendance1"
          data={studentAttendanceData}
          week={this.getWeek(studentAttendanceData[0].date)}
          loading={loading}
          attendanceColorStyle={this.attendanceColorStyle}
        />
      ),
      <ClassAttendancePresent key="attendance2" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceAbsent key="attendance3" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceMixed key="attendance4" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceHundredPerc key="attendance5" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceSprintThree key="attendance6" />,
      <ChartClassPresence key="attendance7" text="Chart Class Presence" />,
    ];

    return (
      <PageTemplate heading="Attendance">
        <PageGrid content={content} />
      </PageTemplate>
    );
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
