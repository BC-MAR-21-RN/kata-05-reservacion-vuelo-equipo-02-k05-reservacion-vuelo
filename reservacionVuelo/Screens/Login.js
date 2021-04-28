import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LoginButton } from '../components/loginButton';
import { styles } from '../Screens/LoginStyles';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { MyFlights } from './MyFlights';

GoogleSignin.configure({
  webClientId: "510894524531-02cf3bsilv0qmjuue7aeanog5v3109td.apps.googleusercontent.com",
})

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      userInfo: [],
      userEmail: 'null',
      userPassword: 'null',
    }
  }

  header() {
    return (
      <View>
        <Text style={styles.welcomeText}>Hello.</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
    )
  }

  form() {
    return (
      <View>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput placeholder="Stephen@mail.com" style={styles.textInput}
          onChangeText={text => this.setState({ userEmail: text })} />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          placeholder="*****"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={text => this.setState({ userPassword: text })}
        />
      </View>
    )
  }

  loginButtons() {

    return (
      <View>
        <LoginButton
          accessibilityLabel='Submit login information'
          onPress={() => { this.userLogin() }}
          title={'LOGIN'}
        />

        <TouchableOpacity
          accessibilityLabel="Go to submit form"
          style={styles.emptyButton}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.emptyButtonText}>SIGNUP</Text>
        </TouchableOpacity>

        <LoginButton
          accessibilityLabel={'alternative google login'}
          icon={'google'}
          title={'LOGIN WITH GOOGLE'}
          onPress={() => { this.SignUpGoogle() }}
        />
      </View>
    )
  }

  render() {

    if (this.state.loggedIn === false) {
      return (
        <View style={styles.container}>
         {this.header()}
         {this.form()}
         {this.loginButtons()}
        </View>
      )
    }
    else {
      return (
        <MyFlights />
      )
    }

  }

  async userLogin() {
    try {
      await auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword).then((res) => {
        this.setState({
          loggedIn: true,
          userEmail: '',
          userPassword: ''
        })
      })
    } catch (error) {
      Alert.alert(`${error.message}`)
    }

  }

  async SignUpGoogle() {
    try {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential).then(() => this.setState({
        loggedIn: true,
        userEmail: '',
        userPassword: ''
      }))
    } catch (e) {
      Alert.alert(`You couldn't log in with google: ${e.message}`);
    }
  }

}
