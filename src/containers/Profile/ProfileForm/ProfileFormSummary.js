import React from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RenderSummary from './render/RenderSummary';

const ProfileFormSummary = (props) => {
  const { values } = props;
  const content = [
    {
      className: 'personal',
      title: 'Personal Information',
      fields: [
        [
          {
            title: 'First Name',
            value: values && values.firstName ? values.firstName : null,
          },
          { title: 'Last Name', value: values && values.lastName ? values.lastName : null },
          { title: 'Bio', value: values && values.bio ? values.bio : null },
        ],
      ],
    },
    {
      className: 'competences',
      title: 'Competences',
      fields:
        values && values.competencies
          ? values.competencies.map((item, i) => ({ title: `competence${i}`, value: item }))
          : null,
    },
    {
      className: 'skills',
      title: 'Skills',
      fields:
        values && values.skills
          ? values.skills.map((item, i) => ({ title: `skill${i}`, value: item }))
          : null,
    },
    {
      className: 'methods',
      title: 'Methods and Tools',
      fields:
        values && values.methodsandtools
          ? values.methodsandtools.map((item, i) => ({ title: `methods${i}`, value: item }))
          : null,
    },
    {
      className: 'education',
      title: 'Education',
      fields:
        values && values.education && values.education[0] !== undefined
          ? values.education.map((item, i) => [
            {
              title: `School #${i + 1}`,
              value: item.school,
            },
            { title: `Degree #${i + 1}`, value: item.degree },
            {
              title: `Field of study #${i + 1}`,
              value: item.fieldofstudy,
            },
            {
              title: `From #${i + 1}`,
              value: item.from,
            },
            {
              title: `To #${i + 1}`,
              value: item.to,
            },
            { title: `Description #${i + 1}`, value: item.descriptopn },
          ])
          : null,
    },
    {
      className: 'examplesofwork',
      title: 'Examples of Work',
      fields:
        values && values.examplesofwork && values.examplesofwork[0] !== undefined
          ? values.examplesofwork.map((item, i) => [
            {
              title: `Title #${i + 1}`,
              value: item.title,
            },
            { title: `Github link #${i + 1}`, value: item.github },
          ])
          : null,
    },
    {
      className: 'experience',
      title: 'Experience',
      fields:
        values && values.workexperience && values.workexperience[0] !== undefined
          ? values.workexperience.map((item, i) => [
            {
              title: `Title #${i + 1}`,
              value: item.title,
            },
            { title: `Company #${i + 1}`, value: item.company },
            {
              title: `Location #${i + 1}`,
              value: item.location,
            },
            {
              title: `From #${i + 1}`,
              value: item.from,
            },
            {
              title: `To #${i + 1}`,
              value: item.to,
            },
            { title: `Description #${i + 1}`, value: item.descriptopn },
          ])
          : null,
    },
    {
      className: 'languages',
      title: 'Languages',
      fields:
        values && values.languages
          ? values.languages.map((item, i) => ({ title: `language${i}`, value: item }))
          : null,
    },
  ];

  return (
    <div className="summary">
      {content.map(item => (
        <RenderSummary
          key={`${item.title}`}
          className={item.className}
          title={item.title}
          fields={item.fields}
        />
      ))}
    </div>
  );
};

ProfileFormSummary.propTypes = {
  values: PropTypes.shape({}).isRequired,
};

const ConnectedProfileFormSummary = connect(state => ({
  values: getFormValues('profileform')(state),
}))(ProfileFormSummary);

export default ConnectedProfileFormSummary;
