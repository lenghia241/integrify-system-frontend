import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAssignments as getAssignmentsAction } from '../../../store/actions/index';
import EachAssignment from './EachAssignment';
import { fetchAssignments } from '../../../store/reducers/index';

class Assignments extends React.Component {
  componentDidMount() {
    const { getAssignments } = this.props;
    getAssignments();
  }

  render() {
    const { assignments } = this.props;
    const displayAssignments = assignments.map((assignment, i) => (
      <EachAssignment key={`${i + 1}  `} assignment={assignment} />
    ));
    return <div className="card col s6">{displayAssignments}</div>;
  }
}

Assignments.propTypes = {
  getAssignments: PropTypes.func.isRequired,
  assignments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
const mapStateToProps = state => ({
  assignments: fetchAssignments(state),
});
export default connect(
  mapStateToProps,
  { getAssignments: getAssignmentsAction },
)(Assignments);
