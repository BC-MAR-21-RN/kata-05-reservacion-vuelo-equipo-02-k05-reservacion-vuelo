import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Booking} from './Screens/Booking';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respuesta: 'si',
    };
  }

  render() {
    return (
      <View>
        <Booking />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default App;
