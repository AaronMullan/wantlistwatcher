import React,  { Component } from 'react';
import Wantlist from '../components/wantlist/Wantlist';
// import styles from '../components/App.css';

export default class Container extends Component {
  state ={
    artist: 'Can',
    title: 'Ege Bamyasi',
    release_id: '1292887',
    wantlist: []
  }

  render() {
    
    return (
      <>
        <Wantlist
          wantlist ={this.state.wantlist}
        />
      </>
    );
  }
}
