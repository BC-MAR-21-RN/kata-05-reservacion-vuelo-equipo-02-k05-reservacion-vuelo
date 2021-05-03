import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../styles/LoginStyles';

export class LoginButton extends Component {
  render() {
    return (
      <TouchableOpacity
        accessibilityLabel={this.props.accessibilityLabel}
        style={styles.loginGoogle}
        onPress={this.props.onPress}>
        <View style={styles.buttonWithIcon}>
          <View style={styles.iconSpace}>
            <Icon name={this.props.icon} size={20} color="#ffff" />
          </View>
          <Text style={styles.filledButtonText}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
