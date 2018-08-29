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
      && fields !== null
        ? fields.map(
          item => (item !== null ? (
                <div key={`${fields.indexOf(item)}`}>
                  {item.map(object => (
                    <div key={`${object.title}`}>
                      <p key={`title${object.title}`}>{object.title}</p>
                      <p key={`value${object.title}`}>{object.value}</p>
                    </div>
                  ))}
                </div>
          ) : null),
        )
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

renderSummary.defaultProps = {
  fields: null,
};

export default renderSummary;
