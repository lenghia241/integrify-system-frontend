import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const EachAssignment = ({ assignment }) => (
  <div className="row-event">
    <time className="col-time icon uppercase">
      <strong>{dayjs(assignment.date.slice(0, assignment.date.length - 7)).format('MMM')}</strong>
      <span>{dayjs(assignment.date.slice(0, assignment.date.length - 7)).format('DD')}</span>
    </time>
    <div className="col-details">
      <p className = "bold row-title uppercase">{assignment.titleOfAssignment}</p>
      <p>{assignment.description}</p>
    </div>
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
