import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import EachAssignment from './EachAssignment';
import { getAssignments } from '../../../store/reducers/index';

class Assignments extends React.Component {
  componentDidMount() {
    const { getAssignmentsList } = this.props;
    getAssignmentsList();
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
};
const mapStateToProps = state => ({
  assignments: getAssignments(state),
});
export default connect(
  mapStateToProps,
  actions,
)(Assignments);
