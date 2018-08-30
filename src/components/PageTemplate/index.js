import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import './PageTemplate.css';

const pageTemplate = ({ children, heading }) => (
  <React.Fragment>
    <div className="header">
      <div className="page-heading">
        <h1>{heading}</h1>
        <SearchBar />
      </div>
      {children}
    </div>
  </React.Fragment>
);

pageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default pageTemplate;
