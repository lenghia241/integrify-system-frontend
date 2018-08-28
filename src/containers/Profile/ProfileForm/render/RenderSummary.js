import React from 'react';
import { PropTypes } from 'prop-types';

const renderSummary = (props) => {
  const { className, title, fields } = props;
  return (
    <div className={className}>
      <h5>{title}</h5>
      {(className === 'personal'
        || className === 'education'
        || className === 'examplesofwork'
        || className === 'experience')
      && fields
        ? fields.map((item, i) => (
            <div key={`${item.title}${i}`}>
              {item.map(object => (
                <div key={`${object.title}${i}`}>
                  <p key={`title${object.title}${i}`}>{object.title}</p>
                  <p key={`value${object.title}${i}`}>{object.value}</p>
                </div>
              ))}
            </div>
        ))
        : null}
      {(className === 'competences'
        || className === 'skills'
        || className === 'methods'
        || className === 'languages')
      && fields ? (
        <ul>
          {fields.map(item => (
            <li key={`value${item.title}`}>{item.value}</li>
          ))}
        </ul>
        ) : null}
    </div>
  );
};

renderSummary.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
};

export default renderSummary;
