import React, {Component} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export class SignUpButton extends Component {
  render() {
    return (
        <TouchableHighlight style={styles.buttonStyle}>
        <Icon name="google" color={'white'} size={15}>
          <Text style={styles.buttonTextStyle}> Login with Google</Text>
        </Icon>
      </TouchableHighlight>
    );
  }
}
