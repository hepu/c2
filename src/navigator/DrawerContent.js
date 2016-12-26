import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Drawer} from 'react-native-material-design'

const {Header} = Drawer

export default class DrawerContent extends Component {
  render() {
    return (
      <Header>
        <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 16}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Hans Gamarra</Text>
        </View>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
