import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from '../components/BookingStyles';

export class BookingQuestion extends Component {
  constructor(props) {
    super(props);
  }

  getCity = text => {
    let splitted = text.split(',');
    if (splitted[0] === undefined) {
      return 'N/A';
    } else {
      return splitted[0].trim();
    }
  };

  getCountry = text => {
    let splitted = text.split(',');
    if (splitted[1] === undefined) {
      return 'N/A';
    } else {
      return splitted[1].trim();
    }
  };

  _onChangeText = text => {
    this.props.onChangeValue(this.props.country, this.getCountry(text));
    this.props.onChangeValue(this.props.city, this.getCity(text));
  };

  render() {
    const {onChangeValue, country, city, question, ...rest} = this.props;
    return (
      <View style={styles.componentContainer}>
        <Text style={styles.label}>{this.props.question}</Text>
        <View style={styles.questionTextBox}>
          <TextInput
            {...rest}
            style={styles.textInput}
            onChangeText={this._onChangeText}
            placeholder="Select Location"
          />
        </View>
      </View>
    );
  }
}
