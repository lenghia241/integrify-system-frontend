import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

import weekOfYear from 'dayjs/plugin/weekOfYear';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';
import classHistory from './mock-data/classHistory';
import ClassAttendancePresent from '../../components/Charts/ClassAttendancePresent';
import ClassAttendanceAbsent from '../../components/Charts/ClassAttendanceAbsent';
import ClassAttendanceMixed from '../../components/Charts/ClassAttendanceMixed';
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
      classHistoryData: {},
      loading: true,
      classHistoryDataMock: this.studentAttendanceDataFilter(
        fiveDayData,
        '5b7ab1952cc5b5a552cfda72',
      ),
    };
  }

  // Takes date and returns week of the year.
  componentDidMount() {
    const { fetchClassAttendance, classAttendance } = this.props;
    fetchClassAttendance();
    this.setState({
      classHistoryData: classAttendance,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.classHistoryData.loading === props.classAttendance.loading) {
      return {
        classHistoryData: props.classAttendance,
        loading: false,
      };
    }
    return null;
  }

  // used for later setting state for each chart's data.

  // newDataRecalculation = () => {
  //   const { classHistoryData } = this.state;
  //   const { userId } = this.props;
  //   this.setState({
  //     studentAttendanceData: this.studentAttendanceDataFilter(classHistoryData, userId),
  //   });
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
    const { loading, classHistoryDataMock, classHistoryData } = this.state;
    const { userId = '5b7c5ade5f49453eecccf351', classAttendance } = this.props;

    const studentAttendanceData = this.studentAttendanceDataFilter(classHistoryData.class, userId);
    const content = [
      <ClassAttendancePresent key="attendance2" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceAbsent key="attendance3" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceMixed key="attendance4" data={this.chartPresentFilter(classHistory)} />,
      <ClassAttendanceSprintThree key="attendance5" />,
      <ChartClassPresence text="Chart Class Presence" key="attendance6" />,
    ];

    return (
      <PageTemplate heading="Attendance">
        <PageGrid content={loading ? null : content} />
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
