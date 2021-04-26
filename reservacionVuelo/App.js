import React, {Component} from 'react';
import { SignUp } from './Screens/SignUp';

import { StyleSheet} from 'react-native';
import {Login} from './Screens/Login';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <SignUp/>;

  }
}

export default App;
