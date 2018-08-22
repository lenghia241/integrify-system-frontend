import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { connect } from 'react-redux';
import { getDash } from '../../../../store/reducers';
import * as actions from '../../../../store/actions';

class StudySync extends Component {
  componentDidMount = () => {
    const { fetchStudySync } = this.props;
    fetchStudySync();
  };

  render() {
    const { data } = this.props;
    return (
      <div className="card col s6">
        {data.length !== undefined
          && data.map(item => (
            <div className="card-panel hoverable list">
              <div className="row">
                <p className="col s9 bold blue-text capitalize">studysync</p>
                <p className="col s3 bold capitalize">
                  {new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
                </p>
              </div>
              <hr />
              <div className="title">
                <p className="bold capitalize">{item.title}</p>
              </div>
              <div className="row">
                <p className="col s9 capitalize">{item.description}</p>
                <p className="col s3">{`${item.firstname} ${item.lastname}`}</p>
              </div>
            </div>
          ))}
        <div>
          <a href="/" className="btn-floating capitalize bold">
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dash: getDash(state),
});

export default connect(mapStateToProps, actions)(StudySync);

StudySync.propTypes = {
  fetchStudySync: PropTypes.func.isRequired,
  data: PropTypes.shape({
  }).isRequired,
};
