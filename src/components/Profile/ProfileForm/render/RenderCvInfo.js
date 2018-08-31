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
        </div>
        {/* <div className="cvContainer">
          <div className="descriptionContainer">
            <img
              className="resumeImage"
              alt="user"
              src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&amp;quality=100&amp;ssl=1"
            />
            <div className="resumeDescrption">
              <div className="personalInfo">
                <div className="fullName">
                  <span className="firstName">{values.firstName}</span>
                  <span className="lastName">{values.lastName}</span>
                </div>
                <p>{values.bio}</p>
                <br />
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

RenderCvInfo.propTypes = {
  values: PropTypes.shape({}).isRequired,
};

export default RenderCvInfo;
