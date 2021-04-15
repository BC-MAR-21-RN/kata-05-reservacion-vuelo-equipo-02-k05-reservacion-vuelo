import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';

export class NumberWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      selectedItem: 1,
    };

    this.data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.label}>How many passengers?</Text>
        </View>
        <View style={styles.wheelContainer}>
          <WheelPicker
            selectedItemTextSize={30}
            itemTextSize={25}
            indicatorColor="#b6b7ba"
            selectedItem={this.state.selectedItem}
            data={this.data}
            onItemSelected={selectedItem => this.setState({selectedItem})}
            style={styles.itemSize}
          />
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
