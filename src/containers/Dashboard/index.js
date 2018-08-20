import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudySync from './components/StudySync';
import { fetchStudySync } from '../../store/actions';

class Dashboard extends Component {
  componentDidMount = () => {
    this.props.fetchStudySync();
  };

  render() {
    return (
      <div className="container">
        Dashboard
        <StudySync data={this.props.dash} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dash: state.dash,
});

export default connect(
  mapStateToProps,
  { fetchStudySync },
)(Dashboard);
