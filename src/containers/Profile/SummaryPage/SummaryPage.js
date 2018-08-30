import React from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

const ProfileFormSummary = (props) => {
  const { values } = props;
  return (
    <div className="summary">
      <div className="personal">
        <h5>Personal Information</h5>
        <p>First Name</p>
        {values && values.firstName ? <p>{values.firstName}</p> : null}
        <p>Last Name</p>
        {values && values.lastName ? <p>{values.lastName}</p> : null}
        <p>Bio</p>
        {values && values.bio ? <p>{values.bio}</p> : null}
      </div>
      <div className="competences">
        <h5>Competences</h5>
        {values && values.competencies
          ? values.competencies.map((item, i) => <p key={`${i + 1}`}>{item}</p>)
          : null}
      </div>
      <div className="skills">
        <h5>Skills</h5>
        {values && values.skills
          ? values.skills.map((item, i) => <p key={`${i + 1}`}>{item}</p>)
          : null}
      </div>
      <div className="methods">
        <h5>Methods and Tools</h5>
        {values && values.tools
          ? values.tools.map((item, i) => <p key={`${i + 1}`}>{item}</p>)
          : null}
      </div>
      <div className="education">
        <h5>Education</h5>
        {values && values.education && values.education[0] !== undefined
          ? values.education.map((item, i) => (
              <div key={`${i + 1}`}>
                <p key={`${i + 1}`}>School</p>
                {item.school ? <p key={`${i + 1}`}>{item.school}</p> : null}
                <p key={`${i + 1}`}>Degree</p>
                {item.degree ? <p key={`${i + 1}`}>{item.degree}</p> : null}
                <p key={`${i + 1}`}>Field of study</p>
                {item.fieldofstudy ? <p key={`${i + 1}`}>{item.fieldofstudy}</p> : null}
                <p key={`${i + 1}`}>From</p>
                {item.from ? <p key={`${i + 1}`}>{item.from}</p> : null}
                <p key={`${i + 1}`}>To</p>
                {item.to ? <p key={`${i + 1}`}>{item.to}</p> : null}
                <p key={`${i + 1}`}>Description</p>
                {item.descriptopn ? <p key={`${i + 1}`}>{item.descriptopn}</p> : null}
              </div>
          ))
          : null}
      </div>
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
                ) : null}{' '}
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
      <div className="languages">
        <h5>Languages</h5>
        {values && values.languages
          ? values.languages.map((item, i) => <p key={`${i + 1}`}>{item}</p>)
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
