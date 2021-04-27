import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LoginButton } from '../components/loginButton';
import { styles } from '../Screens/LoginStyles';

export class Login extends Component {
  constructor(props) {
    super(props);
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
        <TextInput placeholder="StephenRCovey" style={styles.textInput} />
        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          placeholder="*****"
          secureTextEntry={true}
          style={styles.textInput}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.form()}
        <View>

          <LoginButton
            accessibilityLabel='Submit login information'
            onPress={() => { }}
            title={'LOGIN'}
          />

          <TouchableOpacity
            accessibilityLabel="Go to submit form"
            style={styles.emptyButton}>
            <Text style={styles.emptyButtonText}>SIGNUP</Text>
          </TouchableOpacity>

          <LoginButton
            accessibilityLabel={'alternative google login'}
            icon={'google'}
            title={'LOGIN WITH GOOGLE'}
            onPress={()  => { }}
          />
        </View>
      </View>
    );
  }
}
