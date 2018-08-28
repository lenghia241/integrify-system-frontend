import React, { Component } from 'react';
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
    return (
      <div>
        <div className="tabs">
          {this.forms.map((form, i) => (
            <button
              className="tab"
              type="button"
              key={`${i + 1}`}
              onClick={() => this.setState({ page: i })}
            >
              {form.label}
            </button>
          ))}
        </div>
        <SubForm
          previousPage={this.previousPage}
          nextPage={this.nextPage}
          onSubmit={values => console.log('submitting', values)}
        />
      </div>
    );
  }
}

export default ProfileFormMain;
