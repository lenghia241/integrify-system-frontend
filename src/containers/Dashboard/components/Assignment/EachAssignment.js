import React from 'react';
import PropTypes from 'prop-types';

const EachAssignment = ({ assignment }) => (
  <div className="card-panel hoverable">
    <div>{assignment.titleOfAssignment}</div>
    <div>{assignment.description}</div>
    <div>{assignment.date}</div>
  </div>
);

EachAssignment.propTypes = {
  assignment: PropTypes.shape({
    titleOfAssignment: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default EachAssignment;
