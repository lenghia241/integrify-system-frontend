import React from 'react';
import { PropTypes } from 'prop-types';

const renderSummary = (props) => {
  const { className, title, fields } = props;
  return (
    <div className={className}>
      <h5>{title}</h5>
      {className === 'personal' && fields
        ? fields.map((item, i) => (
            <div key={`${i + 1}`}>
              <p key={`title${i + 1}`}>{item.title}</p>
              <p key={`value${i + 1}`}>{item.value}</p>
            </div>
        ))
        : null}
      {className === 'education' && fields
        ? fields.map((item, i) => (
            <div key={`${i + 1}`}>
              <p key={`title${i + 1}`}>{item.school.title}</p>
              <p key={`value${i + 1}`}>{item.school.value}</p>
              <p key={`title${i + 1}`}>{item.degree.title}</p>
              <p key={`value${i + 1}`}>{item.degree.value}</p>
              <p key={`title${i + 1}`}>{item.fieldofstudy.title}</p>
              <p key={`value${i + 1}`}>{item.fieldofstudy.value}</p>
              <p key={`title${i + 1}`}>{item.from.title}</p>
              <p key={`value${i + 1}`}>{item.from.value}</p>
              <p key={`title${i + 1}`}>{item.to.title}</p>
              <p key={`value${i + 1}`}>{item.to.value}</p>
              <p key={`title${i + 1}`}>{item.description.title}</p>
              <p key={`value${i + 1}`}>{item.description.value}</p>
            </div>
        ))
        : null}
      {(className === 'languages'
        || className === 'competences'
        || className === 'skills'
        || className === 'methods')
      && fields ? (
        <ul>
          {fields.map((item, i) => (
            <li key={`value${i + 1}`}>{item.value}</li>
          ))}
        </ul>
        ) : null}
    </div>
  );
};

renderSummary.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf({}),
};

export default renderSummary;
