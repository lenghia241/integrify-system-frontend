import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/attendanceActions';
import { getAttendance as getAttendanceList } from '../../store/reducers';
import './index.css';

class AttendanceButton extends Component {
  componentDidMount() {
    const { getAttendance } = this.props;
    getAttendance('5b7ab195f176fd2767d3a954');
  }

  handleClick = () => {
    const { updateAttendance } = this.props;
    updateAttendance('5b7ab195f176fd2767d3a954');
  };

  render() {
    const { attendance } = this.props;
    let content;
    if (attendance.loading === true) {
      return null;
    }
    return (
      <div className="switch">
        <label htmlFor="switch">
          <input
            id="switch"
            type="checkbox"
            checked={attendance.students.presence === true}
            onChange={this.handleClick}
          />
          <span className="lever" />
          {attendance.students.presence === true ? 'Checked-in' : 'Checked-out'}
        </label>
      </div>
    );

    console.log(attendance.students.presence);
    return content;
  }
}

const mapStateToProps = state => ({
  attendance: getAttendanceList(state),
});

AttendanceButton.propTypes = {
  attendance: PropTypes.shape({ students: PropTypes.array, loading: PropTypes.bool }).isRequired,
  getAttendance: PropTypes.func.isRequired,
  updateAttendance: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  actions,
)(AttendanceButton);
