import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { withRouter } from 'react-router-dom';

import './index.css';

import { getStudySyncs, getId } from '../../../store/reducers';
import { fetchStudySync as fetchStudySyncAction } from '../../../store/actions';

class StudySync extends Component {
  componentDidMount = () => {
    const { fetchStudySync, userId } = this.props;
    fetchStudySync(userId);
  };

  render() {
    const { studysyncs } = this.props;
    return (
      <div className="col s6">
        {studysyncs.length !== undefined
          && studysyncs.map((item, i) => (
            <div className="row-studysync" key={`${i + 1}+${item.date}`}>
                <div className="col-time" >
                  <time className="icon uppercase">
                    <strong>{dayjs(item.date.slice(0, item.date.length - 7)).format('MMM')}</strong>
                    <span>{dayjs(item.date.slice(0, item.date.length - 7)).format('DD')}</span>
                  </time>
                </div>
                <div className="col-title">
                  <div className = "row" >
                    <span className="col s7 uppercase bold">{item.title}</span>
                    <span className="col s5">{`${item.firstName} ${item.lastName}`}</span>
                  </div>
                  <p className="bold capitalize">{item.description}</p>
                </div>
            </div>
          ))}
      </div>
    );
  }
}

StudySync.propTypes = {
  fetchStudySync: PropTypes.func.isRequired,
  studysyncs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  studysyncs: getStudySyncs(state),
  userId: getId(state),
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchStudySync: fetchStudySyncAction },
  )(StudySync),
);
