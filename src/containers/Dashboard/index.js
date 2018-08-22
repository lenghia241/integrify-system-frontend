import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StudySync from './components/StudySync';
import EventPanel from './components/EventPanel';
import { getDash } from '../../store/reducers';
import * as actions from '../../store/actions';

class Dashboard extends Component {
  componentDidMount = () => {
    const { fetchStudySync } = this.props;
    fetchStudySync();
  };

  render() {
    const { dash } = this.props;
    return (
      <div className="row">
        <StudySync data={dash} />
        <EventPanel />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dash: getDash(state),
});

Dashboard.propTypes = {
  fetchStudySync: PropTypes.func.isRequired,
  dash: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, actions)(Dashboard);
