import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/attendanceActions';
import { getAttendance as getAttendanceList } from '../../store/reducers';
import './index.css';

class AttendanceButton extends Component {
  componentDidMount() {
    const { getAttendance } = this.props;
    getAttendance('5b7ab1957c9b3c63007d5c8c');
  }

  handleClick = () => {
    const { updateAttendance } = this.props;
    updateAttendance('5b7ab1957c9b3c63007d5c8c');
  };

  render() {
    const { attendance } = this.props;
    return (
      <div className="switch">
        <label htmlFor="switch">
          <input
            id="switch"
            type="checkbox"
            checked={attendance.students.presence}
            disabled={attendance.loading}
            onChange={this.handleClick}
          />
          <span className="lever" />
          {attendance.loading
            ? 'Loading'
            : attendance.students.presence
              ? 'Checked-in'
              : 'Checked-out'}
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
