import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux'

export default class SplashScreen extends Component {
  componentDidMount() {
    // Currently no initial validation
    Actions.home({
      type: ActionConst.REPLACE
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>C2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    marginTop: -39
  }
});
