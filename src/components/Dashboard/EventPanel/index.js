import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import './index.css';

import { getEventList as getEventsListAction } from '../../../store/actions';
import { getEvents, getId } from '../../../store/reducers';

class EventPanel extends Component {
  componentDidMount() {
    const { getEventsList, userId } = this.props;
    getEventsList(userId);
  }

  render() {
    const { events } = this.props;
    return (
      <div className="event-list">
        {events.map(({
          _id, title, time, venue,
        }) => (
          <div className="row-event" key={_id}>
            <time
              className="col-time icon uppercase"
              dateTime={dayjs(time.slice(0, time.length - 7)).format('DD-MMM')}>
              <strong>{dayjs(time.slice(0, time.length - 7)).format('MMM')}</strong>
              <span>{dayjs(time.slice(0, time.length - 7)).format('DD')}</span>
            </time>
            <div className="col-details">
              <p className="row-title bold-title uppercase">{title}</p>
              <p className="row-location">
                <i className="tiny material-icons">location_on</i>
                {venue.address}, {venue.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

EventPanel.propTypes = {
  getEventsList: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  events: getEvents(state),
  userId: getId(state),
});

export default connect(
  mapStateToProps,
  { getEventsList: getEventsListAction },
)(EventPanel);
