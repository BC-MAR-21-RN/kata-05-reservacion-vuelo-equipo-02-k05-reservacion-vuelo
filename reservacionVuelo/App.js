import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Screens/Login';
import { SignUp } from './Screens/SignUp';
import { MyFlights } from './Screens/MyFlights';
import { Booking } from './Screens/Booking';

import firebase from '@react-native-firebase/app';

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loggedIn: true});
        console.log('si');
        return true;
      } else {
        this.setState({loggedIn: false});
        console.log('no');
        return false;
      }
    });
  }

  render() {
      return this.state.loggedIn === true? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Myflights"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={'MyFlights'} component={MyFlights} />
            <Stack.Screen name={'Booking'} component={Booking} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'Login'} component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      )
  }
}

export default App;
