import React from 'react';
import PropTypes from 'prop-types';
import './PageGrid.css';

const PageGrid = (props) => {
  const { content } = props;
  return <div className="PageGrid">{content}</div>;
};

PageGrid.propTypes = {
  content: PropTypes.element.isRequired,
};

export default PageGrid;
