import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import {Card, Button, Subheader, Divider, List} from 'react-native-material-design'
import ProgressBar from 'react-native-progress/Bar'
import {
  Navigator,
  Database
} from '../config/app'
import Scores from '../scores'
import ScoreProgressBar from '../scoreProgressBar'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalProgress: 0.1
    }
    this.updateTotalProgress = this.updateTotalProgress.bind(this)
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.updateTotalProgress()
  }

  updateTotalProgress() {
    setTimeout(() => {
      try {
        this.setState({
          ...this.state,
          totalProgress: (
            this.refs.humanScores.averagePoints()+
            this.refs.personalScores.averagePoints()+
            this.refs.providerScores.averagePoints()
          )/3
        })
      } catch (e) {
        console.log('Error setting total progress: ', e)
      }
    }, 100)
  }

  render() {
    return (
      <Navigator>
        <ScrollView
          contentContainerStyle={styles.container}
        >
          <View style={styles.generalProgressBar}>
            <Text>Total Progress: {Math.trunc(this.state.totalProgress)}/10</Text>
            <ScoreProgressBar
              width={Dimensions.get('window').width-24}
              points={this.state.totalProgress}
              height={5}
            />
          </View>
          <Scores ref='humanScores' category='human' onUpdate={this.updateTotalProgress} />
          <Scores ref='personalScores' category='personal' onUpdate={this.updateTotalProgress} />
          <Scores ref='providerScores' category='provider' onUpdate={this.updateTotalProgress} />
        </ScrollView>
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 61
  },
  generalProgressBar: {
    paddingHorizontal: 16,
    marginTop: 16
  }
});
