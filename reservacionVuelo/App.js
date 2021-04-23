import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Login } from './Screens/Login';
import { SignUp } from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator()
class App extends Component {
  constructor(props) {
    super(props);
    this.name = 'App';
    this.state = {
      respuesta: 'si',
    };
  }

  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Home' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>)

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
