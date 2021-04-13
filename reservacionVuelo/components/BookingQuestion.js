import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export class BookingQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.label}>{this.props.question}</Text>
        </View>
        <View style={styles.questionTextBox}>
          <TextInput style={styles.textInput} placeholder="Select Location" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  question: {
    flex: 1,
    justifyContent: 'center',
  },
  questionTextBox: {
    flex: 2,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#b6b7ba',
    paddingLeft: 6,
    borderRadius: 6,
  },
  label: {
    fontWeight: '700',
    fontSize: 45,
  },
});
