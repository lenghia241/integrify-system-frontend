import React from 'react';

import ProfileComponent from '../../components/Profile/ProfileComponent/ProfileComponent';
import PageTemplate from '../../components/PageTemplate';
import ProfileFormMain from '../../components/Profile/ProfileForm/ProfileFormMain';
import AssignmentMain from '../../components/Profile/AssignmentForm/AssignmentMain';

import './Profile.css';

const Profile = () => {
  const ProfileComponents = [
    { heading: 'Profile Form', componentBody: <ProfileFormMain /> },
    { heading: 'Assignments', componentBody: <AssignmentMain /> },
  ];
  const renderComponents = ProfileComponents.map(component => (
    <ProfileComponent heading={component.heading} key={ProfileComponents.indexOf(component)}>
      {component.componentBody}
    </ProfileComponent>
  ));
  return (
    <div className = "Profile--container">
      <PageTemplate heading="Profile">
        <div className="Profile">{renderComponents}</div>
      </PageTemplate>
    </div>
  );
};

export default Profile;
