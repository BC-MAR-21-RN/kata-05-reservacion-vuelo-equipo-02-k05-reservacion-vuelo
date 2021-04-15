import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export class InfoBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.label}>Your request was recieved</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  itemSize: {
    height: '100%',
  },
  question: {
    justifyContent: 'center',
  },
  label: {
    fontWeight: '700',
    fontSize: 45,
  },
  wheelContainer: {
    padding: 40,
  },
});
