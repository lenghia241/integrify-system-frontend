import React from 'react';

import './index.css';


// Tool tip for hover effect on graph
const ChartTooltip = (properties) => {
  const { active, payload } = properties;
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="studentAttendance-chart-toolTip">
        {data.attendance !== 'absent' ? (
          <React.Fragment>
            <p>
              {data.attendance}
              <span> attendance</span>
            </p>
            <p>
              <span>In: </span>
              {data.timestamp.timeIn}
            </p>
            <p>
              <span>Out: </span>
              {data.timestamp.timeOut}
            </p>
          </React.Fragment>
        ) : (
          <p>{data.attendance}</p>
        )}
      </div>
    );
  }
  return null;
};

export default ChartTooltip;
