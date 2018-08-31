import React from 'react';
import { PropTypes } from 'prop-types';

class UploadImageInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange },
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value },
    } = this.props;

    return <input type="file" value={value} onChange={this.onChange} />;
  }
}

UploadImageInput.propTypes = {
  input: PropTypes.shape.isRequired,
};

export default UploadImageInput;
