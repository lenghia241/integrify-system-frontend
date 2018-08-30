import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../../ProfileStyles/Cv.css';
import dayjs from 'dayjs';
import educationLogo from '../../education-logo.jpg';

class RenderCvInfo extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { values } = this.props;
    console.log(dayjs(values.education.from));

    return (
      <div className="cvContainer">
        <div className="leftPanel" />
        <div className="rightPanel">
          <div className="personalInfo">
            <div className="fullName">
              <span className="firstName">{values.firstName}</span>
              <span className="lastName">{values.lastName}</span>
            </div>
            <p>{values.bio}</p>
            <br />
          </div>
          <div className="educationContainer">
            <div className="header">
              <img src={educationLogo} alt="educationLogo" className="logo" />
              <span className="headerText">Education</span>
            </div>
            {values.education.map(education => (
              <div key={Math.random()} className="education">
                <span className="duration">
                  {dayjs('2017-09-24T10:42:27 -03:00').year()} - {education.to}
                </span>
                <br />
                <span className="school">{education.school}</span>
                <br />
                <span className="schoolSummmery">
                  {education.degree} in {education.fieldofstudy}
                </span>
                {/* <span className="description">{education.description}</span> */}
              </div>
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
