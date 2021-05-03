import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {LoginButton} from '../components/loginButton';
import {styles} from '../styles/LoginStyles';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {MyFlights} from './MyFlights';

GoogleSignin.configure({
  webClientId:
    '510894524531-02cf3bsilv0qmjuue7aeanog5v3109td.apps.googleusercontent.com',
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      uid: 'null',
      user: [],
      userEmail: 'null',
      userPassword: 'null',
    };
  }

  header() {
    return (
      <View>
        <Text style={styles.welcomeText}>Hello.</Text>
        <Text style={styles.welcomeText}>Welcome Back</Text>
      </View>
    );
  }

  form() {
    return (
      <View>
        <Text style={styles.label}>USERNAME</Text>
        <TextInput
          placeholder="Stephen@mail.com"
          style={styles.textInput}
          onChangeText={text => this.setState({userEmail: text})}
        />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          placeholder="*****"
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={text => this.setState({userPassword: text})}
        />
      </View>
    );
  }

  loginButtons() {
    return (
      <View>
        <LoginButton
          accessibilityLabel="Submit login information"
          onPress={() => {
            this.userLogin();
          }}
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
          onPress={() => {
            this.SignUpGoogle();
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.form()}
        {this.loginButtons()}
      </View>
    );
  }

  async userLogin() {
    try {
      const user = await auth().signInWithEmailAndPassword(
        this.state.userEmail,
        this.state.userPassword,
      );
      this.setState({
        loggedIn: true,
        userEmail: '',
        userPassword: '',
        uid: user.uid,
        user: user,
      });
      console.log(user.user.email);
    } catch (error) {
      Alert.alert(`${error.message}`);
    }
  }

  async SignUpGoogle() {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      const user = await auth().signInWithCredential(googleCredential);

      this.setState({
        loggedIn: true,
        userEmail: '',
        userPassword: '',
        uid: user.uid,
        user: user,
      });
    } catch (e) {
      Alert.alert(`You couldn't log in with google: ${e.message}`);
    }
  }
}
