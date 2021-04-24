import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {Booking} from './Screens/Booking';
import {Login} from './Screens/Login';
import {SignUp} from './Screens/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.name = 'App';
    this.state = {
      respuesta: 'si',
    };
  }
  render() {
    return <Booking />;
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
