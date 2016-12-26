import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';
import { Toolbar, Card } from 'react-native-material-design';
import DrawerContent from './DrawerContent'
import {Actions, ActionConst} from 'react-native-router-flux'

export default class Navigator extends Component {
  openDrawer(){
    this.refs.drawer.openDrawer(0)
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref='drawer'
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <DrawerContent/>}
      >
      <Toolbar
        title="C2"
        icon={this.props.onBack !== undefined ? "arrow-back" : 'menu'}
        onIconPress={() => {
          if (this.props.onBack !== undefined) {
            this.props.onBack()
          } else {
            this.openDrawer()
          }
        }}
        theme='dark'
        primary="paperBlueGrey"
      />
      <View style={styles.container}>
        {this.props.children}
      </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 61
  }
});
