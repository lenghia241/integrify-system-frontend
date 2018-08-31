import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import dayjs from 'dayjs';
import { getEventList as getEventsListAction } from '../../../store/actions';
import { getEvents } from '../../../store/reducers';


class EventPanelDetailed extends Component {
  componentDidMount() {
    const { getEventsList } = this.props;
    getEventsList();
  }

  render() {
    const { events } = this.props;
    return (

    <div className="event-list-detailed">
      { events.map(({
        _id, title, description, time, venue,
      }) => (
          <div className="row-event-detailed" key={_id}>
              <time className="col-time-detailed icon uppercase" dateTime={dayjs(time.slice(0, time.length - 7)).format('DD-MMM')}>
                <strong>{dayjs(time.slice(0, time.length - 7)).format('MMM')}</strong>
                <span>{dayjs(time.slice(0, time.length - 7)).format('DD')}</span>
              </time>
              <div className="col-details-detailed">
                <p className="row-title-detailed bold-title uppercase">
                  {title}
                </p>
                <p className="row-description-detailed capitalize">
                  {description}
                </p>
                <i className="tiny material-icons">access_time</i>  {dayjs(time.slice(0, time.length - 7)).format('HH:mm A')}
                <p className="row-location-detailed">
                  <i className="tiny material-icons">location_on</i>  {venue.address}, {venue.city}
                </p>
              </div>
          </div>
      ))}
    </div>
    );
  }
}

EventPanelDetailed.propTypes = {
  getEventsList: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  events: getEvents(state),
});

export default connect(
  mapStateToProps,
  { getEventsList: getEventsListAction },
)(EventPanelDetailed);
