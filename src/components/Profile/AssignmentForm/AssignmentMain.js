import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import AssignmentMainStyle from './AssignmentMainStyle.css';
import AddAssignmentForm from './AddAssignmentForm';
import { getInfo, addInfo } from '../../../store/actions/assignmentFormAction';

class AssignmentMain extends Component {
  componentDidMount() {
    const { getInfo: Info } = this.props;
    Info();
  }

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
      <tr key={item.title} className="table-row">
        <td>{dateTime}</td>
        <td>{item.title}</td>
        <td>{item.status ? 'done' : 'notdone'}</td>
        <td>{item.githubLink}</td>
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
                <th>Title</th>
                <th>Status</th>
                <th>GitHub Link</th>
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
  getInfo: PropTypes.func.isRequired,
  assignmentItems: PropTypes.shape({}).isRequired,
};
const mapStateToProps = state => ({
  assignmentItems: state.assignment,
});
export default connect(
  mapStateToProps,
  {
    AssignmentMainStyle,
    reduxForm,
    Field,
    getInfo,
    addInfo,
  },
)(AssignmentMain);
