import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/attendanceActions';
import { getAttendance as getAttendanceList } from '../../store/reducers';
import './index.css';

class AttendanceButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        id: '01',
        presence: true,
      },
    };
  }

  /*
  componentDidMount() {
    const { getAttendance } = this.props;
    getAttendance('02');
  }
*/
  handleClick = () => {
    const { updateAttendance } = this.props;
    updateAttendance('02');
  };

  render() {
    const { student } = this.state;
    return (
      <div className="switch">
        <label htmlFor="switch">
          <input id="switch" type="checkbox" checked={student.presence === true} />
          <span className="lever" />
          Check In
        </label>
      </div>
    );
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
