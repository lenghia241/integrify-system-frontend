import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUserProfile as fetchUserProfileAction } from '../../../store/actions';
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
      { label: 'Competences', Component: ProfileFormCompetencies },
      { label: 'Skills', Component: ProfileFormSkills },
      { label: 'Methods and Tools', Component: ProfileFormMethodsAndTools },
      { label: 'Education', Component: ProfileFormEducation },
      { label: 'Examples of Work', Component: ProfileFormExamplesOfWork },
      { label: 'Experience', Component: ProfileFormWorkExperience },
      { label: 'Languages', Component: ProfileFormLanguages },
      { label: 'Summary', Component: Summary },
    ];
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    const { fetchUserProfile } = this.props;
    fetchUserProfile();
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
    console.log(this.props);
    return (
      <div>
        <div className="profile-tabs tabs tabs-fixed-width z-depth-1">
          {this.forms.map((form, i) => (
            <button
              className="profile-tab active"
              type="button"
              key={`${i + 1}`}
              onClick={() => this.setState({ page: i })}
            >
              {form.label}
            </button>
          ))}
        </div>
        <SubForm
          initialValues={profile}
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
};

ProfileFormMain.defaultProps = {
  profile: {},
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(
  mapStateToProps,
  { fetchUserProfile: fetchUserProfileAction },
)(ProfileFormMain);
