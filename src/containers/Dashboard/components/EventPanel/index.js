import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvents } from '/Users/abdimuleta/Desktop/eventpanel/integrify-system-frontend/src/store/actions/index';
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
                    { events.map(({_id, title, description, time}) => (
                        <li key= {_id}>
                            <div className="collapsible-header">{title}</div>
                            <div className="collapsible-body">
                            <p>{description}</p>
                            <p className="red-text"><i className="material-icons">calendar</i>{time}</p>
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
