import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../styles/styles';

export class CustomTextInput extends Component {
  render() {
    return (
      <View style={styles.textInputSpacing}>
        <Text style={styles.textInputTitle}>{this.props.textInputTitle}</Text>
        <TextInput
          secureTextEntry={this.props.password}
          style={styles.textInputStyle}
          onChangeText={this.props.onChangeText}
          keyboardType={this.props.keyboardType}
        />
        {this.props.checkError ? (
          <Text style={styles.errorMessage}> {this.props.errorMessage} </Text>
        ) : null}
      </View>
    );
  }
}
