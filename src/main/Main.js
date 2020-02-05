import React,  { Component } from 'react';
import Wantlist from '../components/wantlist/Wantlist';
import Info from '../components/info/Info';
// import styles from '../components/App.css';

export default class Container extends Component {
  state ={
    artist: '',
    title: '',
    release_id: '',
    wantlist: [],
    infoartist: '',
    infotitle: '',
    infoprice: '',
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
