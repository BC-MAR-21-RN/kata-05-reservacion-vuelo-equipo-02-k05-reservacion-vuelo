import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WheelPicker} from 'react-native-wheel-picker-android';
import {styles} from '../styles/BookingStyles';

export class NumberWheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      selectedItem: 1,
    };

    this.data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  }

  _onChangeText = text => {
    this.props.onChangeValue(this.props.name, text);
  };

  render() {
    const {onChangeValue, name, ...rest} = this.props;
    return (
      <View style={styles.componentContainer}>
        <Text style={styles.label}>How many passengers?</Text>
        <View style={styles.wheelContainer}>
          <WheelPicker
            selectedItemTextSize={30}
            itemTextSize={25}
            indicatorColor="#b6b7ba"
            selectedItem={this.state.selectedItem}
            data={this.data}
            onItemSelected={selectedItem => {
              this._onChangeText(selectedItem + 1);
              this.setState({selectedItem});
            }}
            style={styles.itemSize}
          />
        </View>
      </View>
    );
  }
}
