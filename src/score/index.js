import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, Subheader, Divider, List} from 'react-native-material-design'
import ProgressBar from 'react-native-progress/Bar'
import {Actions, ActionConst} from 'react-native-router-flux';
import ScoreProgressBar from '../scoreProgressBar'

export default class Score extends Component {
  constructor(props) {
    super(props)
    this.changeScore = this.changeScore.bind(this)
  }

  changeScore() {
    const score = this.props.score
    Actions.changeScore({
      score: score,
      onChange: this.props.onChange
    })
  }

  getFillColor(points) {
    if (points >= 9) {
      return `rgba(0, 122, 255, 1)`
    } else if (points >= 6) {
      return `rgba(0, 180, 122, 1)`
    } else if (points >= 4) {
      return 'rgba(200, 200, 100, 1)'
    } else {
      return 'rgba(200, 0, 0, 1)'
    }
  }

  render() {
    const score = this.props.score
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{score.title}</Text>
        <ScoreProgressBar
          points={score.points}
          height={21}
          width={130}
        />
        <Button
          text='Change'
          raised={true}
          onPress={this.changeScore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    width: 89
  }
});
