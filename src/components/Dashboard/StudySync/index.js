import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { getStudySyncs } from '../../../store/reducers';
import * as actions from '../../../store/actions';

class StudySync extends Component {
  componentDidMount = () => {
    const { fetchStudySync } = this.props;
    fetchStudySync();
  };

  render() {
    const { studysyncs } = this.props;
    return (
      <div className="col s6">
        {studysyncs.length !== undefined
          && studysyncs.map((item, i) => (
            <div className="card-panel hoverable list" key={`${i + 1}+${item.date}`}>
              <div className="row">
                <p className="col s8 bold capitalize">studysync</p>
                <p className="col s4 bold capitalize">
                  {dayjs(item.date).format('DD/MM/YYYY HH:mm:ss')}
                </p>
              </div>
              <div className="title">
                <p className="bold capitalize">{item.title}</p>
              </div>
              <div className="row">
                <p className="col s8 capitalize">{item.description}</p>
                <p className="col s4">{`${item.firstName} ${item.lastName}`}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  studysyncs: getStudySyncs(state),
});

export default connect(
  mapStateToProps,
  actions,
)(StudySync);

StudySync.propTypes = {
  fetchStudySync: PropTypes.func.isRequired,
  studysyncs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
