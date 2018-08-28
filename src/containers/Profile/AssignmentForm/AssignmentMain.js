import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import AssignmentMainStyle from './AssignmentMainStyle.css';
import AddAssignmentForm from './AddAssignmentForm';
import { getInfo, addInfo } from '../../../store/actions/assignmentFormAction';


class AssignmentMain extends Component {
  submit = (values) => {
    const { addInfo: addInfoProp } = this.props;
    addInfoProp(values);
  };

  render() {
    const { assignmentItems: items } = this.props;

    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    const itemsform = items.items.map(item => (
      <tr key={item.assignment} className="table-row">
        <td>{dateTime}</td>
        <td>{item.assignment}</td>
        <td>{item.github}</td>
        <td />
        <td>{item.teacher}</td>
        <td>
          <button className="edit-btn" type="submit">
            Edit
          </button>
        </td>
      </tr>
    ));

    return (
      <div className="main-form">
        <div className="assignment-main">
          <div className="assignment-header">
            <h1 className="h1">Assignments</h1>
            <div className="add-btn">
              <NavLink to="/AddAssignmentForm" activeClassName="active">
                Add
              </NavLink>
            </div>
          </div>
          <table className="responsive-table mainTable">
            <thead className="assignment-main-header table-header">
              <tr>
                <th>Date</th>
                <th>Assignment</th>
                <th>GitHub</th>
                <th>Status</th>
                <th>Teacher</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{itemsform}</tbody>
          </table>
        </div>
        <AddAssignmentForm onSubmit={this.submit} />
      </div>
    );
  }
}

AssignmentMain.propTypes = {
  addInfo: PropTypes.func.isRequired,
  assignmentItems: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  assignmentItems: state.assignment,
});
export default connect(
  mapStateToProps,
  {
    AssignmentMainStyle, reduxForm, Field, getInfo, addInfo,
  },
)(AssignmentMain);
