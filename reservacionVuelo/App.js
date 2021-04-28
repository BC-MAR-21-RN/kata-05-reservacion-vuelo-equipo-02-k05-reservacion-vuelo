import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Screens/Login';
import { SignUp } from './Screens/SignUp';
import { MyFlights } from './Screens/MyFlights';
import { Booking } from './Screens/Booking';

import { firebase } from './database/firebase'

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  b4() {
    const usersRef = firebase.firestore().collection('users')
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
        {console.log('loggeado', usersRef);}
      } else {
        this.setState({ loggedIn: false })
        {console.log('no loggeado');}
      }
    });
  }

  render() {
    return (
      this.state.loggedIn === false ?
        <NavigationContainer >
          <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'SignUp'} component={SignUp} />
            <Stack.Screen name={'Login'} component={Login} />
          </Stack.Navigator>
        </NavigationContainer> :
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Myflights' screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'MyFlights'} component={MyFlights} />
            <Stack.Screen name={'Booking'} component={Booking} />
          </Stack.Navigator>
        </NavigationContainer>)
    {/*<NavigationContainer >
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'MyFlights'} component={MyFlights} />
          <Stack.Screen name={'Booking'} component={Booking} />
          <Stack.Screen name={'SignUp'} component={SignUp} />
          <Stack.Screen name={'Login'} component={Login} />
        </Stack.Navigator>
      </NavigationContainer>*/}

  }
}

export default App;
