import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
            style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.emptyButton}>
            <Text style={styles.emptyButtonText}>SIGNUP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.loginOption}>
            <Text style={styles.emptyButtonText}>LOGIN WITH GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-evenly',
    paddingLeft: 30,
    paddingRight: 30,
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 40,
  },
  label: {
    color: '#b6b7ba',
    paddingTop: 20,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#b6b7ba',
    paddingLeft: 10,
    borderRadius: 6,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#5c6df8',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginTop: 40,
  },
  buttonText: {
    color: '#ffff',
  },
  emptyButton: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  emptyButtonText: {
    color: '#b6b7ba',
  },
  loginOption: {
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
  },
});
