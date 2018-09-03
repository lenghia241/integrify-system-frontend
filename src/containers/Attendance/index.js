import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const { userId, classAttendance } = this.props;

    const studentAttendanceData = this.studentAttendanceDataFilter(classHistoryData.class, userId);

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
                data={studentAttendanceData}
                week={this.getWeek(studentAttendanceData[0].date)}
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
