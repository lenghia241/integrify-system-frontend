import React from 'react';
import PropTypes from 'prop-types';
import './PageGrid.css';

const PageGrid = (props) => {
  const { content } = props;
  return <div className="PageGrid">{content}</div>;
};

PageGrid.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PageGrid;
