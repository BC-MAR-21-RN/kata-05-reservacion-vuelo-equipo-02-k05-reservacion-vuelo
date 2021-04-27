import React, {Component} from 'react';
import { Login } from './Screens/Login';
import { SignUp } from './Screens/SignUp';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Login/>;
  }
}

export default App;
