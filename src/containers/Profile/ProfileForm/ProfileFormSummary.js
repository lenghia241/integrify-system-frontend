import React from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import RenderSummary from './render/RenderSummary';

const ProfileFormSummary = (props) => {
  const { values } = props;
  console.log(props);
  const content = [
    {
      className: 'personal',
      title: 'Personal Information',
      fields: [
        { title: 'First Name', value: values && values.firstName ? values.firstName : null },
        { title: 'Last Name', value: values && values.lastName ? values.lastName : null },
        { title: 'Bio', value: values && values.bio ? values.bio : null },
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
      fields: [
        {
          title: 'School',
          value:
            values && values.education && values.education[0] !== undefined
              ? values.values.education[0].school
              : null,
        },
        {
          title: 'Degree',
          value:
            values && values.education && values.education[0] !== undefined
              ? values.lastName
              : null,
        },
        { title: 'Bio', value: values && values.bio ? values.bio : null },
      ],
    },
    {
      className: 'education',
      title: 'Education',
      fields:
        values && values.education && values.education[0] !== undefined
          ? values.education.map((item, i) => ({
            school: {
              title: `School #${i + 1}`,
              value: item.school,
            },
            degree: { title: `Degree #${i + 1}`, value: item.degree },
            fieldofstudy: {
              title: `Field of study #${i + 1}`,
              value: item.fieldofstudy,
            },
            from: {
              title: `From #${i + 1}`,
              value: item.from,
            },
            to: {
              title: `To #${i + 1}`,
              value: item.to,
            },
            description: { title: `Description #${i + 1}`, value: item.descriptopn },
          }))
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
  console.log(content);
  return (
    <div className="summary">
      {content.map((item, i) => (
        <RenderSummary
          key={`${i + 1}`}
          className={item.className}
          title={item.title}
          fields={item.fields}
        />
      ))}
      <div className="examplesofwork">
        <h5>Examples of Work</h5>
        {values && values.examplesofwork && values.examplesofwork[0] !== undefined
          ? values.examplesofwork.map((item, i) => (
              <div key={`${i + 1}`}>
                <p key={`${i + 1}`}>Title</p>
                {item.title ? <p key={`${i + 1}`}>{values.examplesofwork[i].title}</p> : null}
                <p key={`${i + 1}`}>Github link</p>
                {values.examplesofwork[i].github ? (
                  <p key={`${i + 1}`}>{values.examplesofwork[i].github}</p>
                ) : null}
              </div>
          ))
          : null}
      </div>
      <div className="experience">
        <h5>Experience</h5>
        {values && values.workexperience && values.workexperience[0] !== undefined
          ? values.workexperience.map((item, i) => (
              <div key={`${i + 1}`}>
                <p key={`${i + 1}`}>Title</p>
                {values.workexperience[i].title ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].title}</p>
                ) : null}
                <p key={`${i + 1}`}>Company</p>
                {values.workexperience[i].company ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].company}</p>
                ) : null}
                <p key={`${i + 1}`}>Location</p>
                {values.workexperience[i].location ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].location}</p>
                ) : null}
                <p key={`${i + 1}`}>From</p>
                {values.workexperience[i].from ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].from}</p>
                ) : null}
                <p key={`${i + 1}`}>To</p>
                {values.workexperience[i].to ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].to}</p>
                ) : null}
                <p key={`${i + 1}`}>Description</p>
                {values.workexperience[i].descriptopn ? (
                  <p key={`${i + 1}`}>{values.workexperience[i].descriptopn}</p>
                ) : null}
              </div>
          ))
          : null}
      </div>
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
