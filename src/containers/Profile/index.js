import React from 'react';

import ProfileComponent from '../../components/Profile/ProfileComponent/ProfileComponent';
import PageTemplate from '../../components/PageTemplate';
import ProfileFormMain from '../../components/Profile/ProfileForm/ProfileFormMain';
import AssignmentMain from '../../components/Profile/AssignmentForm/AssignmentMain';
import AssignmentFormContainer from '../../components/Profile/AssignmentForm/AssignmentFormContainer';

import './Profile.css';

const Profile = () => {
  const ProfileComponents = [
    { heading: 'Profile Form', componentBody: <ProfileFormMain /> },
    { heading: 'Add Assignment Form', componentBody: <AssignmentFormContainer /> },
    { heading: 'Assignments', componentBody: <AssignmentMain /> },
  ];
  const renderComponents = ProfileComponents.map(component => (
    <ProfileComponent heading={component.heading} key={ProfileComponents.indexOf(component)}>
      {component.componentBody}
    </ProfileComponent>
  ));
  return (
    <PageTemplate heading="Profile">
      <div className="Profile">{renderComponents}</div>
    </PageTemplate>
  );
};

export default Profile;
