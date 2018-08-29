const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name is Required';
  }
  if (!values.bio) {
    errors.bio = 'Bio Required';
  }
  if (!values.competencies || values.competencies.length === 0) {
    errors.competencies = { _error: 'You have to add at least one competence.' };
  } else {
    const competenceArrayErrors = [];
    values.competencies.forEach((competence, i) => {
      if (!competence || !competence.length) {
        competenceArrayErrors[i] = 'Competence field is Reqired';
      }
    });
    if (competenceArrayErrors.length) {
      errors.competencies = competenceArrayErrors;
    }
  }
  if (!values.skills || values.skills.length === 0) {
    errors.skills = { _error: 'You have to add at least one skill.' };
  } else {
    const skillsArrayErrors = [];
    values.skills.forEach((skill, i) => {
      if (!skill || !skill.length) {
        skillsArrayErrors[i] = 'Skill field is Reqired';
      }
    });
    if (skillsArrayErrors.length) {
      errors.skills = skillsArrayErrors;
    }
  }
  if (!values.tools || values.tools.length === 0) {
    errors.tools = { _error: 'You have to add at least one tool.' };
  } else {
    const toolsArrayErrors = [];
    values.tools.forEach((tool, i) => {
      if (!tool || !tool.length) {
        toolsArrayErrors[i] = 'Tool field is Reqired';
      }
    });
    if (toolsArrayErrors.length) {
      errors.tools = toolsArrayErrors;
    }
  }
  if (!values.education || values.education.length === 0) {
    errors.education = { _error: 'Please add your education.' };
  } else {
    const educationArrayErrors = [];
    values.education.forEach((education, educationIndex) => {
      const educationErrors = {};
      if (!education || !education.school) {
        educationErrors.school = 'School field is required';
        educationArrayErrors[educationIndex] = educationErrors;
      }
      if (!education || !education.degree) {
        educationErrors.degree = 'Degree field is required';
        educationArrayErrors[educationIndex] = educationErrors;
      }
      if (!education || !education.from) {
        educationErrors.from = 'From field is required';
        educationArrayErrors[educationIndex] = educationErrors;
      }
    });
    if (educationArrayErrors.length) {
      errors.education = educationArrayErrors;
    }
  }
  if (!values.examplesofwork || !values.examplesofwork.length) {
    errors.examplesofwork = { _error: 'Please add Methods and Tools.' };
  } else {
    const examplesOfWorkArrayErrors = [];
    values.examplesofwork.forEach((work, workIndex) => {
      const examplesofworkErrors = {};
      if (!work || !work.title) {
        examplesofworkErrors.title = 'Title field is required';
        examplesOfWorkArrayErrors[workIndex] = examplesofworkErrors;
      }
      if (!work || !work.github) {
        examplesofworkErrors.github = 'Github link field is required';
        examplesOfWorkArrayErrors[workIndex] = examplesofworkErrors;
      }
    });
    if (examplesOfWorkArrayErrors.length) {
      errors.examplesofwork = examplesOfWorkArrayErrors;
    }
  }
  if (!values.workexperience || !values.workexperience.length) {
    errors.workexperience = { _error: 'Please add your work experience.' };
  } else {
    const workexperienceArrayErrors = [];
    values.workexperience.forEach((workexperience, workexperienceIndex) => {
      const workexperienceErrors = {};
      if (!workexperience || !workexperience.title) {
        workexperienceErrors.title = 'Title field is required';
        workexperienceArrayErrors[workexperienceIndex] = workexperienceErrors;
      }
      if (!workexperience || !workexperience.company) {
        workexperienceErrors.company = 'Company field is required';
        workexperienceArrayErrors[workexperienceIndex] = workexperienceErrors;
      }
      if (!workexperience || !workexperience.location) {
        workexperienceErrors.location = 'Location field is required';
        workexperienceArrayErrors[workexperienceIndex] = workexperienceErrors;
      }
      if (!workexperience || !workexperience.from) {
        workexperienceErrors.from = 'From field is required';
        workexperienceArrayErrors[workexperienceIndex] = workexperienceErrors;
      }
    });
    if (workexperienceArrayErrors.length) {
      errors.workexperience = workexperienceArrayErrors;
    }
  }
  if (!values.languages || values.languages.length === 0) {
    errors.languages = { _error: 'You have to add at least one Language.' };
  } else {
    const languagesArrayErrors = [];
    values.languages.forEach((language, i) => {
      if (!language || !language.length) {
        languagesArrayErrors[i] = 'Language field is Reqired';
      }
    });
    if (languagesArrayErrors.length) {
      errors.languages = languagesArrayErrors;
    }
  }
  return errors;
};

export default validate;
