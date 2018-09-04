import React from 'react';
import PropTypes from 'prop-types';


const ChartClassPresence = (props) => {
  const { text } = props;
  return (
        <div>
            <p>{text}</p>
        </div>
  );
};

ChartClassPresence.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ChartClassPresence;
