import React from 'react';

import ProfileComponent from '../../components/Profile/ProfileComponent/ProfileComponent';
import PageTemplate from '../../components/PageTemplate';
import ProfileFormMain from '../../components/Profile/ProfileForm/ProfileFormMain';
import AssignmentMain from './AssignmentForm/AssignmentMain';
import Cv from '../../components/Profile/ProfileForm/ProfileCv';

import './Profile.css';

const Profile = () => {
  const ProfileComponents = [{ heading: 'Profile Form', componentBody: < ProfileFormMain /> }];

  const renderComponents = ProfileComponents.map(component => (
    <ProfileComponent heading={component.heading} key={ProfileComponents.indexOf(component)}>
      {component.componentBody}
    </ProfileComponent>
  ));
  return (
    <PageTemplate heading="Profile">
      <div className="Profile">
        {renderComponents}
        <AssignmentMain />
      </div>
    </PageTemplate>
  );
};

export default Profile;
