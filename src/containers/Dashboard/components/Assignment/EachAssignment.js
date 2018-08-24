import React from 'react';
import PropTypes from 'prop-types';

const EachAssignment = (props) => {
  const { assignment } = props;
  return (
    <div className="card-panel hoverable">
      <p className = "bold600">{assignment.titleOfAssignment}</p>
      <p>{assignment.description}</p>
      <p>{assignment.date}</p>
    </div>
  );
};

EachAssignment.propTypes = {
  assignment: PropTypes.shape({ titleOfAssignment: PropTypes.string }).isRequired,
};

export default EachAssignment;
