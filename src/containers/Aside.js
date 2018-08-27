import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchUser as fetchUserAction,
  checkIn as checkInAction,
  checkOut as checkOutAction,
  logOut as logOutAction,
} from '../store/actions';

import { getAuth } from '../store/reducers';

import AsideComponent from '../components/Aside';

class Aside extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const {
      auth, checkIn, checkOut, logOut,
    } = this.props;
    const onChange = (event) => {
      if (event.target.checked) {
        checkIn();
      } else {
        checkOut();
      }
    };
    return <AsideComponent auth={auth} logOut={logOut} onChange={onChange} />;
  }
}
Aside.propTypes = {
  checkIn: PropTypes.func.isRequired,
  checkOut: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect(
  mapStateToProps,
  {
    fetchUser: fetchUserAction,
    checkIn: checkInAction,
    checkOut: checkOutAction,
    logOut: logOutAction,
  },
)(Aside);