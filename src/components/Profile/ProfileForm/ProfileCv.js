import React, { Component } from 'react';
// import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactToPrint from 'react-to-print';
import RenderCvInfo from './render/RenderCvInfo';
import printLogo from '../logosForCv/Printer.png';
import '../ProfileStyles/Cv.css';

import { fetchUserProfileAction } from '../../../store/actions';
import { getProfile, getId } from '../../../store/reducers';

class CvInfo extends Component {
  componentDidMount() {
    const { fetchUserProfile, userId } = this.props;
    fetchUserProfile(userId);
  }

  render() {
    const { profile } = this.props;
    console.log(profile);
    const buttonStyle = {
      width: '5vw',
      border: 'none',
      textalign: 'right',
    };
    return (
      <div className="summary">
        <ReactToPrint
          trigger={() => (
            <button type="button" className="printButton" style={buttonStyle}>
              <img className="printLogo" src={printLogo} style={buttonStyle} alt="printlogo" />
            </button>
          )}
          content={() => this.componentRef}
        />
        <RenderCvInfo
          values={profile}
          ref={(el) => {
            this.componentRef = el;
          }}
        />
      </div>
    );
  }
}

CvInfo.propTypes = {
  profile: PropTypes.shape({}).isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  profile: getProfile(state).profiledata,
  userId: getId(state),
});
const ConnectedCvInfo = connect(
  mapStateToProps,
  { fetchUserProfile: fetchUserProfileAction },
)(CvInfo);

export default ConnectedCvInfo;
