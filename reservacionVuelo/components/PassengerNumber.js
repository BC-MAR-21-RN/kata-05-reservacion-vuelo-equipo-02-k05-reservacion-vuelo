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
      <View>
        <Text>Hola</Text>
        <View style={styles.wheelOutline}>
          <WheelPicker
            selectedItemTextColor="#5c6df8"
            selectedItemTextSize={35}
            itemTextSize={30}
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
  itemSize: {
    height: '100%',
  },
  wheelOutline: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'black',
  },
});
