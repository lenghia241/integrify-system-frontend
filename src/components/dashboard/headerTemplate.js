import React from 'react';
import PropTypes from 'prop-types';

const HeaderTemplate = (props) => {
  const { header } = props;
  return (
    <div>
      <h5>{header}</h5>
    </div>
  );
};

HeaderTemplate.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HeaderTemplate;
