import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AssignmentMainStyle.css';
import AddAssignmentForm from './AddAssignmentForm';
import { getInfo } from '../../../store/actions/assignmentFormAction';

class AssignmentMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
  }

  componentDidMount() {
    const { getInfo: Info } = this.props;
    Info();
  }

  handleHidden = () => {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  };

  submit = (values) => {
    const { addInfo: addInfoProp } = this.props;
    addInfoProp(values);
  };

  render() {
    const { assignmentItems: items } = this.props;
    const { hidden } = this.state;
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
            <button
              onClick={this.handleHidden}
              type="button"
              className="waves-effect waves-light btn"
            >
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
        <AddAssignmentForm hidden={hidden} onSubmit={this.submit} />
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
    getInfo,
  },
)(AssignmentMain);
