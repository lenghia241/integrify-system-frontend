import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import dayjs from 'dayjs';
import * as actions from '../../../store/actions/index';
import { getEvent } from '../../../store/reducers/index';

class EventPanel extends Component {
  componentDidMount() {
    const { getEventList } = this.props;
    getEventList();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="event-list">
          { events.map(({
            _id, title, time, venue,
          }) => (
              <div className="row-event hoverable" key={_id}>
                  <time className="col-time icon uppercase" dateTime={dayjs(time.slice(0, time.length - 7)).format('DD-MMM')}>
                    <em>{dayjs(time.slice(0, time.length - 7)).format('ddd')}</em>
                    <strong>{dayjs(time.slice(0, time.length - 7)).format('MMM')}</strong>
                    <span>{dayjs(time.slice(0, time.length - 7)).format('DD')}</span>
                  </time>
                  <div className="col-details">
                    <p className="row-title bold-title uppercase">
                      {title}
                    </p>
                    <p className="row-location">
                      <i className="tiny material-icons">location_on</i>{venue.address}, {venue.city}
                   </p>
                  </div>
              </div>
          ))}
      </div>
    );
  }
}

EventPanel.propTypes = {
  getEventList: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  events: getEvent(state).events,
});

export default connect(
  mapStateToProps,
  actions,
)(EventPanel);
