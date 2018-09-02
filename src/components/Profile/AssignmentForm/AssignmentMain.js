import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AssignmentMainStyle.css';
import { getInfo } from '../../../store/actions/assignmentFormAction';

const AssignmentMain = (props) => {
  const { assignmentItems: items } = props;

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
        <button className="waves-effect waves-light btn" type="submit">
          Edit
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="main-form">
      <div className="assignment-main">
        <div className="assignment-header">
          <button type="button" className="waves-effect waves-light btn">
            Add
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
          <tbody>{itemsform}</tbody>
        </table>
      </div>
    </div>
  );
};

AssignmentMain.propTypes = {
  assignmentItems: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  assignmentItems: state.assignment,
});
export default connect(
  mapStateToProps,
  {
    getInfo,
  },
)(AssignmentMain);
