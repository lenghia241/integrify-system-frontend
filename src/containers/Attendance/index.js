import React from 'react';
import PageTemplate from '../../components/PageTemplate';
import PageGrid from '../../components/PageGrid';

const Attendance = () => {
  const components = [
    { heading: 'Graph1', componentBody: 'First Graph' },
    { heading: 'Graph2', componentBody: 'Second Graph' },
    { heading: 'Graph3', componentBody: 'Third Graph' },
    { heading: 'Graph4', componentBody: 'Fourth Graph' },
    { heading: 'Graph5', componentBody: 'Fifth Graph' },
    { heading: 'Graph6', componentBody: 'Sixth Graph' },
  ];

  const renderComponents = components.map(component => (
    <div key={`${component.heading}`}>{component.componentBody}</div>
  ));

  return (
    <PageTemplate heading="Attendance">
      <PageGrid content={renderComponents} />
    </PageTemplate>
  );
};

export default Attendance;
