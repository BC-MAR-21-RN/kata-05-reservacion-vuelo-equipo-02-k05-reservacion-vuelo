import React, {Component} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

export class BookingQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>hola</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
