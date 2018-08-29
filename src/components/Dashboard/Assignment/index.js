import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAssignments as getAssignmentsAction } from '../../../store/actions/index';
import EachAssignment from './EachAssignment';

class Assignments extends React.Component {
  componentDidMount() {
    const { getAssignments } = this.props;
    getAssignments();
  }

  render() {
    const { assignments } = this.props;
    const displayAssignments = assignments.map(assignment => (
      <EachAssignment
        key={`${assignment.description} ${assignment.date}  `}
        assignment={assignment}
      />
    ));
    return <div className="card col s6">{displayAssignments}</div>;
  }
}

Assignments.propTypes = {
  getAssignments: PropTypes.func.isRequired,
  assignments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
const mapStateToProps = state => ({
  assignments: state.assignments,
});
export default connect(
  mapStateToProps,
  { getAssignments: getAssignmentsAction },
)(Assignments);
