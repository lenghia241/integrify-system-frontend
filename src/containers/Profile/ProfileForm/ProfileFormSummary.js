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
        values && values.competences
          ? values.competences.map(item => ([{ value: item }]))
          : null,
    },
    {
      className: 'skills',
      title: 'Skills',
      fields:
        values && values.skills
          ? values.skills.map(item => ([{ value: item }]))
          : null,
    },
    {
      className: 'tools',
      title: 'Methods and Tools',
      fields:
        values && values.tools
          ? values.tools.map(item => ([{ value: item }]))
          : null,
    },
    {
      className: 'education',
      title: 'Education',
      fields:
        values && values.education
          ? values.education.map(
            (item, i) => (item !== undefined
              ? [
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
              ]
              : null),
          )
          : null,
    },
    {
      className: 'examplesOfWork',
      title: 'Examples of Work',
      fields:
        values && values.examplesOfWork
          ? values.examplesOfWork.map(
            (item, i) => (item !== undefined
              ? [
                {
                  title: `Title #${i + 1}`,
                  value: item.title,
                },
                { title: `Github link #${i + 1}`, value: item.github },
              ]
              : null),
          )
          : null,
    },
    {
      className: 'experience',
      title: 'Experience',
      fields:
        values && values.workexperience
          ? values.workexperience.map((item, i) => (item !== undefined
            ? [
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
            ]
            : null))
          : null,
    },

    {
      className: 'languages',
      title: 'Languages',
      fields:
        values && values.languages
          ? values.languages.map(item => ([{ value: item }]))
          : null,
    },
  ];
  return (
    <div className="summary">
      {content.map(item => (
        <RenderSummary
          key={`${item.className}`}
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