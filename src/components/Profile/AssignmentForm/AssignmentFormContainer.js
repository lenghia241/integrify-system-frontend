import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddAssignmentForm from './AddAssignmentForm';
import { addInfo } from '../../../store/actions/assignmentFormAction';

class AssignmentFormContainer extends Component {
  submit = (values) => {
    const { addInfo: addInfoProp } = this.props;
    addInfoProp(values);
  };

  render() {
    return (
      <div>
        <AddAssignmentForm onSubmit={this.submit} />
      </div>
    );
  }
}

AssignmentFormContainer.propTypes = {
  addInfo: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  assignmentItems: state.assignment,
});
export default connect(
  mapStateToProps,
  {
    addInfo,
  },
)(AssignmentFormContainer);
