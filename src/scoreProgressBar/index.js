import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProgressBar from 'react-native-progress/Bar'

export default class ScoreProgressBar extends Component {
  constructor(props) {
    super(props)
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
    let progress = 0
    if (this.props.points !== 0 && this.props.points !== undefined) {
      progress = this.props.points/10
    }
    return (
      <ProgressBar
        progress={progress}
        height={21}
        width={100}
        color={this.getFillColor(this.props.points)}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({

});
