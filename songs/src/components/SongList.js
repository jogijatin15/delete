import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

  render() {
    return (
      <div>SongsList</div>
    )
  }
}

export default connect()(SongList);