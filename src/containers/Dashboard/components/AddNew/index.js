import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class NewStudySync extends Component {
  state = {};

  render() {
    return (
      <div id="addNewModal" className="modal">
        <form className="modal-content">
          <h4>Modal Header</h4>
          <div>
            <label htmlFor="firstname">First Name :</label>
            <Field name="firstname" component="input" type="text" />
          </div>
          <div>
            <a href="/">
              <i className="material-icons">check</i>
            </a>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  state;
};

const AddNew = connect(mapStateToProps)(NewStudySync);

export default AddNew;
