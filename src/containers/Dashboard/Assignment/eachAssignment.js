import React from 'react';
import PropTypes from 'prop-types';

const EachAssignment = (props) => {
  const { assignment } = props;
  const design = {
    height: '200px',
    width: '300px',
    border: '1px solid red',
    margin: '5px 5px',
  };
  return (
    <div style={design}>
      <div>{assignment.titleOfAssignment}</div>
      <div>{assignment.description}</div>
      <div>{assignment.duedate}</div>
    </div>
  );
};

EachAssignment.propTypes = {
  assignment: PropTypes.shape({ titleOfAssignment: PropTypes.string }).isRequired,
};

export default EachAssignment;
