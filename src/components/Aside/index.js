import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchUser as fetchUserAction,
  checkIn as checkInAction,
  checkOut as checkOutAction,
} from '../../store/actions/index';
import { getAuth } from '../../store/reducers';

import './Aside.css';
import AsideComponent from './Aside';

class Aside extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    const { auth, checkIn, checkOut } = this.props;
    const onChange = (event) => {
      if (event.target.checked) {
        checkIn();
      } else {
        checkOut();
      }
    };
    console.log(auth);
    return <AsideComponent auth={auth} onChange={onChange} />;
  }
}
Aside.propTypes = {
  checkIn: PropTypes.func.isRequired,
  checkOut: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: getAuth(state),
});

export default connect(
  mapStateToProps,
  { fetchUser: fetchUserAction, checkIn: checkInAction, checkOut: checkOutAction },
)(Aside);
