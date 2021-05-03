import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../styles/styles';

export class SignUpButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.buttonStyle}
        onPress={this.props.onPress}>
        <Icon name={this.props.icon} color={'white'} size={15}>
          <Text style={styles.buttonTextStyle}>{this.props.title}</Text>
        </Icon>
      </TouchableHighlight>
    );
  }
}
