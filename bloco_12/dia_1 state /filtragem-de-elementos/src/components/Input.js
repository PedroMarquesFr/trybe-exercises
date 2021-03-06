import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Input extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    return <input onChange={this.props.onChange}></input>;
  }
}
