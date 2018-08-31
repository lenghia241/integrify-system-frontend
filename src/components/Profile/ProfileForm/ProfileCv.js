import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactToPrint from 'react-to-print';
import RenderCvInfo from './render/RenderCvInfo';

class CvInfo extends Component {
  render() {
    const { values } = this.props;
    console.log(values);

    return (
      <div className="summary">
        <ReactToPrint
          trigger={() => <button type="button">Print this out!</button>}
          content={() => this.componentRef}
        />
        <RenderCvInfo
          values={values}
          ref={(el) => {
            this.componentRef = el;
          }}
        />
      </div>
    );
  }
}

CvInfo.propTypes = {
  values: PropTypes.shape({}).isRequired,
};

const ConnectedCvInfo = connect(state => ({
  values: getFormValues('profileform')(state),
}))(CvInfo);

export default ConnectedCvInfo;
