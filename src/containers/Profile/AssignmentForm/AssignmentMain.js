import React, { Component } from "react";
import AddAssignmentForm from "./AddAssignmentForm";
import AssignmentMainStyle from "./AssignmentMainStyle.css";
import { connect } from "react-redux";
import { getInfo } from "../../../store/actions/assignmentFormAction";
import { addInfo } from "../../../store/actions/assignmentFormAction";
import {NavLink} from "react-router-dom";
import { reduxForm, Field } from "redux-form";

class AssignmentMain extends Component {
  submit = values => {
    this.props.addInfo(values);
    console.log(values);
  };

  render() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    const items = this.props.assignmentItems.items.map((item, i) => (
      <tr className="table-row">
        <td>{dateTime}</td>
        <td>{item.assignment}</td>
        <td>{item.github}</td>
        <td>
        </td>
        <td>{item.teacher}</td>
        <td>
          <button className="edit-btn">Edit</button>
        </td>
      </tr>
    ));

    return (
      <div>
        <div className="assignment-main">
          <div className="assignment-header">
            <h1 className="h1">Assignments</h1>

            <button className="add-btn">
            <NavLink to="/AddAssignmentForm" activeClassName="active">Add</NavLink>
            </button>
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

            <tbody>{items}</tbody>
          </table>
        </div>
        <AddAssignmentForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  assignmentItems: state.assignmentFormReducer
});
export default connect(
  mapStateToProps,
  { getInfo, addInfo }
)(AssignmentMain);
