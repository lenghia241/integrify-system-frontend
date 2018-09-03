import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/attendanceActions';
import { getAttendance as getAttendanceList } from '../../store/reducers';
import './index.css';

class AttendanceButton extends Component {
  componentDidMount() {
    const { getAttendance } = this.props;
    getAttendance('5b7c5ade5f49453eecccf351');
  }

  handleClick = () => {
    const { updateAttendance } = this.props;
    updateAttendance('5b7c5ade5f49453eecccf351');
  };

  render() {
    const { attendance } = this.props;
    let status;
    if (attendance.students.presence) {
      status = 'Checked In';
    } else {
      status = 'Checked Out';
    }
    return (
      <div className="switch">
        <label htmlFor="switch">
          <input
            id="switch"
            type="checkbox"
            checked={attendance.students.presence || false}
            disabled={attendance.loading}
            onChange={this.handleClick}
          />
          <span className="lever" />
          {attendance.loading ? (
            <div>Checking</div>
          ) : (
            <div className={attendance.students.presence ? 'teal-text' : 'red-text'}>{status}</div>
          )}
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  attendance: getAttendanceList(state),
});

AttendanceButton.propTypes = {
  attendance: PropTypes.shape({ students: PropTypes.shape({}), loading: PropTypes.bool })
    .isRequired,
  getAttendance: PropTypes.func.isRequired,
  updateAttendance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(AttendanceButton);
