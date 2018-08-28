import React, { Component } from 'react';
import PageTemplate from '../../components/PageTemplate';
import StudentAttendance from '../../components/StudentAttendance';

export default class Attendance extends Component {
  render() {
    const content = (
      <PageTemplate heading="Attendance">
        <div className="Attendance">
          <StudentAttendance />
        </div>
      </PageTemplate>
    );
    return content;
  }
}
