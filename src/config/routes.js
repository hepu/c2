import React, { Component } from 'react';
import {Actions, Scene, ActionConst} from 'react-native-router-flux';
import SplashScreen from '../splashScreen'
import Home from '../home'
import ChangeScore from '../changeScore'

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="splashScreen" component={SplashScreen} title="SplashScreen" hideNavBar={true} initial={true} />
    <Scene key="home" component={Home} title="Home" hideNavBar={true} />
    <Scene key="changeScore" component={ChangeScore} title="Change Score" hideNavBar={true} />
  </Scene>
);

module.exports = Scenes
