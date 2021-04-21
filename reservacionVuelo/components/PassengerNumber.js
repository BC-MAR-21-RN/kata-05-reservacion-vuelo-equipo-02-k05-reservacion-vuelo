import React, {Component} from 'react';
import {View} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';
import {styles} from '../components/BookingStyles';

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
      <View style={styles.componentContainer}>
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
