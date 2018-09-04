import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../../ProfileStyles/Cv.css';
import dayjs from 'dayjs';
import logo from '../../logosForCv/company-logo.png';

class RenderCvInfo extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { values } = this.props;
    return (
      <div className="resume">
        <div>
          <img className="companyLogo" alt="logo" src={logo} />
        </div>
        <div className="cvContainerpage1">
          <div className="descriptionContainer">
            <img
              className="resumeImage"
              alt="user"
              src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&amp;quality=100&amp;ssl=1"
            />
            <div className="resumeDescrption">
              <div className="personalInfo">
                <div className="fullName">
                  <span className="firstName">{values.firstName} </span>
                  <span className="lastName"> {values.lastName}</span>
                </div>
                <p className="bio">{values.bio}</p>
                <div className="portfolioLinks">
                  <p className="github">
                    <span className="linkName">GitHub : </span>
                    {values.github}
                  </p>
                  <p className="linkedin">
                    <span className="linkName">LinkedIn : </span>
                    {values.linkedin}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="detailsContainer">
            <div className="column1">
              <div id="competences">
                <h5 className="fieldHeading">Competences</h5>
                <ul>
                  {values.competences.map(competence => (
                    <li key={Math.random()}>{competence}</li>
                  ))}
                </ul>
              </div>
              <div id="skillsContainer">
                <h5 className="fieldHeading">Methods&Tools</h5>
                <ul id="skills">
                  {values.skills.map(skill => (
                    <li key={Math.random()}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div id="educationContainer">
                <h5 className="fieldHeading">Education</h5>
                {values.education.map(education => (
                  <ul id="education" key={Math.random()}>
                    <li>
                      <div id="title">
                        <span id="degree">{education.degree}</span> in{' '}
                        <span id="field">{education.fieldOfStudy}</span>
                      </div>
                      <div>
                        <span id="school"> {education.school}</span>
                        <span id="duration">
                          {dayjs(education.from).format('YYYY')} -
                          {dayjs(education.from).format('YYYY')}
                        </span>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="column2" id="examplesOfWork">
              <h5 className="fieldHeading">Examples of Work</h5>
              {values.examplesOfWork.map(examplesOfWork => (
                <div key={Math.random()}>
                  <li className="title">{examplesOfWork.title}:</li>
                  <p className="description">
                    hfweuiuw uqweuriow if wieojf iouirenfiwei iuwrijwf uehuwef uwqdhwj djq
                    yt v ytfyg
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div id="experienceContainer">
            <h5 className="fieldHeading">Experience</h5>
            {values.experience.map(work => (
              <ul key={Math.random()}>
                <div>
                  <span id="title">{work.title}</span>,<span id="company">{work.company}</span>,
                  <span id="location">{work.location}</span>
                  <span className="duration">
                    {dayjs(work.from).format('YYYY')} - {dayjs(work.to).format('YYYY')}
                  </span>
                </div>
                <p id="responsibility">
                  <span className="bold">Responsibility: </span>
                  <span> {work.description}</span>
                </p>
              </ul>
            ))}
          </div>
          <div id="languageContainer">
            <h5 className="fieldHeading">Languages</h5>
            {values.languages.map(language => (
              <ul key={Math.random()}>
                <li>{language}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
RenderCvInfo.propTypes = {
  values: PropTypes.shape({}).isRequired,
};

export default RenderCvInfo;
