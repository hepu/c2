import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router} from 'react-native-router-flux';
import {
  Routes
} from './src/config/app'
import {
  Provider
} from 'react-redux' ;
import configureStore from './src/config/store';
import getInitialState from './src/config/initialState'

// const store = configureStore(getInitialState())

export default class C2 extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <Router scenes={Routes}/>
    );
  }
}

AppRegistry.registerComponent('C2', () => C2);
