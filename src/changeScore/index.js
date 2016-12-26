import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import {Card, Button, Subheader, Divider, List} from 'react-native-material-design'
import ProgressBar from 'react-native-progress/Bar'
import {Actions, ActionConst} from 'react-native-router-flux';
import {
  Navigator,
  Database
} from '../config/app'

const ANIMATION_TIMEOUT = 500

export default class ChangeScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: 0
    }
    this.submitChanges = this.submitChanges.bind(this)
    this.onPointsChange = this.onPointsChange.bind(this)
  }

  componentWillMount() {
    const score = this.props.score
    this.setState({
      ...this.state,
      points: score.points
    })
  }

  onPointsChange(text) {
    this.setState({
      ...this.state,
      points: text
    })
  }

  submitChanges() {
    Actions.pop()
    setTimeout(() => {
      this.props.onChange({
        ...this.props.score,
        points: parseInt(this.state.points)
      })
    }, ANIMATION_TIMEOUT)
  }

  description() {
    switch (this.props.score.key) {
      case 'basic_needs':
        return "Basic needs (eat, thirst, sleep, walk, being loved)"
        break;
      case 'social':
        return "Social interactions (internal and external)"
        break;
      case 'enjoyment':
        return "Enjoyment of life (Your happiness depends of yourself)"
        break;
      case 'environment':
        return "Taking care of environment (Leave the world same or better as you found it)"
        break;
      case 'passions':
        return "Your passions, what you love to do"
        break;
      case 'providing':
        return "Which need am i providing to people with my passions?"
        break;
      default:
        return "No description available"
    }
  }

  render() {
    const score = this.props.score
    return (
      <Navigator onBack={Actions.pop}>
        <Subheader text={`Change score to: ${score.title}`} />
        <Card>
          <Card.Body>
            <Text>{this.description()}</Text>
            <TextInput
              value={this.state.points.toString()}
              placeholder='Points (0 to 10)'
              onChangeText={this.onPointsChange}
              onSubmitEditing={this.submitChanges}
              autoFocus={true}
              returnKeyType='done'
            />
          </Card.Body>
          <Card.Actions position="right">
            <Button value="ACTION" text="Change" onPress={this.submitChanges} />
          </Card.Actions>
        </Card>
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});
