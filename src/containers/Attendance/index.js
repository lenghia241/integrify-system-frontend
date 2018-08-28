import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';

const Attendance = () => (
  <PageTemplate heading="Attendance">
    <div className="Attendance">
      <StudentAttendance />
    </div>
  </PageTemplate>
);

export default Attendance;
