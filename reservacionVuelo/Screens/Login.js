import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../Screens/LoginStyles';

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcomeText}>Hello.</Text>
          <Text style={styles.welcomeText}>Welcome Back</Text>
        </View>
        <View>
          <Text style={styles.label}>USERNAME</Text>
          <TextInput placeholder="Francisco López" style={styles.textInput} />
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            placeholder="*****"
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <View>
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.filledButton}>
            <Text style={styles.filledButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Go to submit form"
            style={styles.emptyButton}>
            <Text style={styles.emptyButtonText}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Alternative google login"
            style={styles.loginGoogle}>
            <View style={styles.buttonWithIcon}>
              <View style={styles.iconSpace}>
                <Icon name="google" size={20} color="#ffff" />
              </View>
              <Text style={styles.filledButtonText}>LOGIN WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
