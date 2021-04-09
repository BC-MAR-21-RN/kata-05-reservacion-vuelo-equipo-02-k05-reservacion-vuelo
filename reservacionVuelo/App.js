import React, {Component} from 'react';
import {Text, View} from 'react-native';

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
        <Text> {this.props.name} </Text>
      </View>
    );
  }
}

export default App;
