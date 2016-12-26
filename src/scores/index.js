import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {Card, Button, Subheader, Divider, List} from 'react-native-material-design'
import ProgressBar from 'react-native-progress/Bar'
import {
  Navigator,
  Database
} from '../config/app'
import Score from '../score'

export default class Scores extends Component {

  static PropTypes = {
    // category: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      scores: []
    }
    this.onScoreChange = this.onScoreChange.bind(this)
  }

  componentWillMount() {
    this.refreshScores()
  }

  databaseKey() {
    return this.props.category+'_scores'
  }

  refreshScores() {
    Database.load(this.databaseKey()).then((rawScores) => {
      if (rawScores !== null) {
        let scores = JSON.parse(rawScores)
        this.setState({
          ...this.state,
          scores
        })
      } else {
        this.initializeScores()
      }
    }).catch((error) => {
      console.log(`Error loading scores for ${this.props.category}: `, error)
    })
  }

  initializeScores() {
    let scores = []
    switch (this.props.category) {
      case 'human':
        scores = [
          {key: 'basic_needs', points: 5, title: 'Basic Needs', position: 1},
          {key: 'social', points: 5, title: 'Social Interactions', position: 2},
          {key: 'enjoyment', points: 5, title: 'Enjoyment', position: 3},
          {key: 'environment', points: 5, title: 'Environment care', position: 4}
        ]
        break;
      case 'personal':
        scores = [
          {key: 'passions', points: 5, title: 'Passions', position: 1},
        ]
        break;
      case 'provider':
        scores = [
          {
            key: 'providing',
            points: 5,
            title: 'Providing people with my passions',
            position: 1
          },
        ]
        break;
    }
    this.setState({
      ...this.state,
      scores
    })
  }

  storeScores() {
    setTimeout(() => {
      Database.store(this.databaseKey(), this.state.scores)
    }, 300)
  }

  categoryName() {
    return this.props.category[0].toUpperCase()+this.props.category.slice(1)
  }

  averagePoints() {
    let total = 0
    if (this.state.scores !== undefined) {
      this.state.scores.forEach((score) => {
        total += score.points
      })
      return total/this.state.scores.length
    } else {
      return 0
    }
  }

  onScoreChange(scoreData) {
    const scoreIndex = this.state.scores.map((score) => {
      return score.key
    }).indexOf(scoreData.key)
    this.setState({
      ...this.state,
      scores: [
        ...this.state.scores.slice(0, scoreIndex),
        scoreData,
        ...this.state.scores.slice(scoreIndex+1)
      ]
    })
    this.storeScores()
    if (this.props.onUpdate !== undefined) {
      this.props.onUpdate()
    }
  }

  renderScores() {
    if (this.state.scores.length === 0) {
      return (
        <View>
          <Text>No scores found</Text>
        </View>
      )
    }
    return this.state.scores.map((score) => {
      return (
        <Score
          key={score.key}
          score={score}
          onChange={this.onScoreChange}
        />
      )
    })
  }

  render() {
    return (
      <View>
        <Subheader text={this.categoryName()+`: ${Math.trunc(this.averagePoints())}/10`} />
        <Card>
          <Card.Body>
            {this.renderScores()}
          </Card.Body>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
