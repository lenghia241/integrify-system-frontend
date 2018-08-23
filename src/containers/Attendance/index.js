import React from 'react';
import AttendanceButton from '../../components/AttendanceButton';
import PageTemplate from '../../components/PageTemplate';

const Attendance = () => (
  <PageTemplate heading="Attendance">
    <div className="Attendance">
      <AttendanceButton />
    </div>
  </PageTemplate>
);

export default Attendance;
