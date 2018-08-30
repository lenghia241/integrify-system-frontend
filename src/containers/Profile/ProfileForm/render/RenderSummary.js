import React from 'react';
import { PropTypes } from 'prop-types';

const renderSummary = (props) => {
  const { className, title, fields } = props;
  return (
    <div className={className}>
      {(className === 'personal'
        || className === 'education'
        || className === 'examplesOfWork'
        || className === 'experience')
      && fields !== null ? (
        <div className={`${className}-inner`}>
          <h5>{title}</h5>
          {fields.map(
            (item, i) => (item !== null ? (
                <div key={`${item + i}`} className="fields-wrapper">
                  {item.map((object, index) => (
                    <div key={`${object + index}`} className="fields">
                      <p>{object.title}</p>
                      <p>{object.value}</p>
                    </div>
                  ))}
                </div>
            ) : null),
          )}
        </div>
        ) : null}
      {(className === 'competences'
        || className === 'skills'
        || className === 'tools'
        || className === 'languages')
      && fields ? (
        <div>
          <h5>{title}</h5>
          <ul>
            {fields.map(item => item.map((object, index) => <li key={`value${object + index}`}>{object.value}</li>))}
          </ul>
        </div>
        ) : null}
    </div>
  );
};

renderSummary.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

renderSummary.defaultProps = {
  fields: null,
};

export default renderSummary;
