import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {styles} from '../components/BookingStyles';

export class BookingQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.componentContainer}>
        <View style={styles.questionTextBox}>
          <TextInput style={styles.textInput} placeholder="Select Location" />
        </View>
      </View>
    );
  }
}
