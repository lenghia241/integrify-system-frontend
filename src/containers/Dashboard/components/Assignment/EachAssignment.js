import React from 'react';
import PropTypes from 'prop-types';

const EachAssignment = (props) => {
  const { assignment } = props;
  return (
    <div className="card-panel">
      <div>{assignment.titleOfAssignment}</div>
      <div>{assignment.description}</div>
      <div>{assignment.date}</div>
    </div>
  );
};

EachAssignment.propTypes = {
  assignment: PropTypes.shape({ titleOfAssignment: PropTypes.string }).isRequired,
};

export default EachAssignment;
