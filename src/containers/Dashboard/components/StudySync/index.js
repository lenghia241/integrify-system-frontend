import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const StudySync = ({ data }) => (
  <div className="card col s6">
    {data.length !== undefined
      && data.map(item => (
        <div className="card-panel hoverable list">
          <div className="row">
            <p className="col s9 bold blue-text capitalize">studysync</p>
            <p className="col s3 bold capitalize">{new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
          </div>
          <hr/>
          <div className="title">
            <p className="bold capitalize">{item.title}</p>
          </div>
          <div className="row">
            <p className="col s9 capitalize">{item.description}</p>
            <p className="col s3">{`${item.firstname} ${item.lastname}`}</p>
          </div>
        </div>
      ))}
    <div>
      <a href="/" className="btn-floating capitalize bold">
        <i className="material-icons">add</i>
      </a>
    </div>
  </div>
);

export default StudySync;

StudySync.propTypes = {
  data: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
};
