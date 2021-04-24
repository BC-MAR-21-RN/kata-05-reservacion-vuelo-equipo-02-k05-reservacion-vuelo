import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {Login} from './Screens/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.name = 'App';
    this.state = {
      respuesta: 'si',
    };
  }
  render() {
    return <Login/>;
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
