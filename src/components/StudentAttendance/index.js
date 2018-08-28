import React, { Component } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, Cell,
} from 'recharts';
import PropTypes from 'prop-types';
import './index.css';

export default class StudentAttendance extends Component {
  // Tool tip for hover effect on graph
  renderTooltip(props) {
    const { active, payload } = props;
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
                {data.timesStamp.timeIn}
              </p>
              <p>
                <span>Out: </span>
                {data.timesStamp.timeOut}
              </p>
            </React.Fragment>
          ) : (
            <p>{data.attendance}</p>
          )}
        </div>
      );
    }
    return null;
  }

  // returns a list of attendance objects if id matches. Temp use for filtering history data.

  render() {
    const {
      data, week, loading, attendanceColorStyle,
    } = this.props;
    const content = loading ? null : (
      <div className="studentAttendance-container">
        <div>
          <ScatterChart
            width={500}
            height={80}
            margin={{
              top: 30,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          >
            <Scatter data={data} fill="#ff0000">
              {data.map(entry => (
                <Cell
                  key={`api-${entry.numId}`}
                  fill={attendanceColorStyle(entry.attendance)}
                />
              ))}
            </Scatter>
            <XAxis
              type="category"
              dataKey="dateDisplay"
              interval={0}
              tickLine={{ transform: 'translate(0, -3)' }}
            />
            <YAxis
              type="number"
              dataKey="index"
              name="week"
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: `Week ${week}`, position: 'insideRight' }}
            />
            <ZAxis range={[700, 700]} />
            <Tooltip
              cursor={{ display: 'none' }}
              wrapperStyle={{ zIndex: 100 }}
              content={this.renderTooltip}
            />
          </ScatterChart>
        </div>
      </div>
    );

    return content;
  }
}

StudentAttendance.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  week: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  attendanceColorStyle: PropTypes.func.isRequired,
};
