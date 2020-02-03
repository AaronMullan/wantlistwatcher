import React,  { Component } from 'react';
import Wantlist from '../components/wantlist/Wantlist';
import Info from '../components/info/Info';
// import styles from '../components/App.css';

export default class Container extends Component {
  state ={
    artist: 'Can',
    title: 'Ege Bamyasi',
    release_id: '1292887',
    wantlist: [],
    infoartist: 'Velvet Underground',
    infotitle: 'The Quine Tapes',
    infoprice: '$50',
    info: []
  }

  render() {
    
    return (
      <>
        <Wantlist wantlist ={this.state.wantlist} />
        <Info info ={this.state.info} />
      </>
    );
  }
}
