import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAssignmentsList as getAssignmentsAction } from '../../../store/actions/index';
import EachAssignment from './EachAssignment';
import { getAssignments, getId } from '../../../store/reducers/index';

class Assignments extends React.Component {
  componentDidMount() {
    const { getAssignmentsList, userId } = this.props;
    getAssignmentsList(userId);
  }

  render() {
    const { assignments } = this.props;
    const displayAssignments = assignments.map(assignment => (
      <EachAssignment key={`${assignment._id}`} assignment={assignment} />
    ));
    return <div className="card col s6">{displayAssignments}</div>;
  }
}

Assignments.propTypes = {
  getAssignmentsList: PropTypes.func.isRequired,
  assignments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  assignments: getAssignments(state),
  userId: getId(state),
});

export default connect(
  mapStateToProps,
  { getAssignmentsList: getAssignmentsAction },
)(Assignments);
