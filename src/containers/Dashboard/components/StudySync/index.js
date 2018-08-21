import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const StudySync = ({ data }) => (
  <div className="card">
    {data.length !== undefined
      && data.map(item => (
        <div className="card-panel hoverable list">
          <div className="row">
            <p className="col s9">studysync</p>
            <p className="col s3">Date</p>
          </div>
          <div className="title">
            <p className="">{item.title}</p>
          </div>
          <div className="row">
            <p className="col s7">{item.description}</p>
            <p className="col s5">{item.fullname}</p>
          </div>
        </div>
      ))}
    <div>
      <a href="/" className="waves-effect waves-light btn">
        button
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
