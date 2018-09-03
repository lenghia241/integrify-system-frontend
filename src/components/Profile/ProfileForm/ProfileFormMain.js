import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUserProfileAction } from '../../../store/actions/index';
import { getProfile, getId } from '../../../store/reducers';

import ProfileFormPhotoBio from './ProfileFormPhotoBio';
import ProfileFormCompetencies from './ProfileFormCompetencies';
import ProfileFormMethodsAndTools from './ProfileFormMethodsAndTools';
import ProfileFormEducation from './ProfileFormEducation';
import ProfileFormExamplesOfWork from './ProfileFormExamplesOfWork';
import ProfileFormWorkExperience from './ProfileFormWorkExperience';
import ProfileFormLanguages from './ProfileFormLanguages';
import ProfileFormSkills from './ProfileFormSkills';

import Summary from '../SummaryPage/SummaryPage';
import '../ProfileStyles/Forms.css';

class ProfileFormMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
    };
    this.forms = [
      { label: 'Personal Information', Component: ProfileFormPhotoBio },
      { label: 'Competencies', Component: ProfileFormCompetencies },
      { label: 'Skills', Component: ProfileFormSkills },
      { label: 'Methods and Tools', Component: ProfileFormMethodsAndTools },
      { label: 'Education', Component: ProfileFormEducation },
      { label: 'Examples of Work', Component: ProfileFormExamplesOfWork },
      { label: 'Experience', Component: ProfileFormWorkExperience },
      { label: 'Languages', Component: ProfileFormLanguages },
    ];
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const { fetchUserProfile, userId } = this.props;
    fetchUserProfile(userId);
  }

  nextPage() {
    this.setState(prevState => ({
      page: prevState.page === this.forms.length ? prevState.page : prevState.page + 1,
    }));
  }

  previousPage() {
    this.setState(prevState => ({
      page: prevState.page === 0 ? prevState.page : prevState.page - 1,
    }));
  }

  render() {
    const { page } = this.state;
    const SubForm = this.forms[page].Component;
    const { profile } = this.props;

    return (
      <div>
        <div className="profile-tabs tabs z-depth-1">
          {this.forms.map((form, i) => (
            <button
              className="profile-tab active"
              type="button"
              key={`${form.label}`}
              onClick={() => this.setState({ page: i })}>
              {form.label}
            </button>
          ))}
        </div>
        <SubForm
          initialValues={profile.profiledata}
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          onSubmit={values => console.log('submitting', values)}
        />
      </div>
    );
  }
}

ProfileFormMain.propTypes = {
  fetchUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  userId: PropTypes.string.isRequired,
};

ProfileFormMain.defaultProps = {
  profile: {},
};

const mapStateToProps = state => ({
  profile: getProfile(state),
  userId: getId(state),
});

export default connect(
  mapStateToProps,
  { fetchUserProfile: fetchUserProfileAction },
)(ProfileFormMain);
