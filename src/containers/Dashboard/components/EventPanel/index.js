import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '../../../../store/actions/index';
import PropTypes from 'prop-types';


class EventPanel extends Component {
  componentWillMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props.event;
    return (
            <div className="container">
                <h1>Upcoming Events</h1>
                <ul className="collapsible">
                    { events.map(({_id, title, description, venue, time, event_url}) => (
                        <li key= {_id}>
                            <div className="collapsible-header"><h5>Event title: {title}</h5></div>
                            <div className="collapsible-body">
                                <p>Event description: {description}</p>
                                <p className="black-text"><i className="material-icons">event_available</i>{time}</p>
                                <p className="black-text"><i className="material-icons">location_on</i>{venue.city}</p>
                                <p className="black-text"><i className="material-icons">web</i><a href="">{event_url}</a></p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    );
  }
}

EventPanel.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  event: state.event,
});

export default connect(mapStateToProps, { getEvents })(EventPanel);
