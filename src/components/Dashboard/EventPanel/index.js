import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getEventList as getEventsListAction } from '../../../store/actions/index';
import { getEvents } from '../../../store/reducers/index';

class EventPanel extends Component {
  componentDidMount() {
    const { getEventsList } = this.props;
    getEventsList();
  }

  render() {
    const { events } = this.props;
    return (
      <div className="card col s6 ">
        <ul className="collapsible ">
          {events.map(({
            _id, title, description, venue, time,
          }) => (
            <li key={_id} className="hoverable">
              <div className="collapsible-header">
                <h5>Event title: {title}</h5>
              </div>
              <div className="collapsible-body">
                <p>Event description: {description}</p>
                <p className="black-text">
                  <i className="material-icons">event_available</i>
                  {time}
                </p>
                <p className="black-text">
                  <i className="material-icons">location_on</i>
                  <a href={`http://maps.google.com/?q=${venue.city}`}>{venue.city}</a>
                </p>
                <p className="blue-text">
                  <i className="material-icons">web</i>
                  <a href="/">Link to the actual event goes here.</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

EventPanel.propTypes = {
  getEventsList: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  events: getEvents(state),
});

export default connect(
  mapStateToProps,
  { getEventsList: getEventsListAction },
)(EventPanel);
