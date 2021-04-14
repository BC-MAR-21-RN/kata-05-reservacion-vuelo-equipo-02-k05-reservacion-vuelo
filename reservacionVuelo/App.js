import React, {Component} from 'react';
import { SignUp } from './Screens/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      respuesta: 'si',
    };
  }
  render() {
    return (  
      <SignUp> </SignUp>
    );  
  }
}

export default App;
