import React, {Component} from 'react';
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

export default App;
