import React from 'react';
import PropTypes from 'prop-types';

const HeaderTemplate = (props) => {
  const { header } = props;
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};

HeaderTemplate.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HeaderTemplate;
