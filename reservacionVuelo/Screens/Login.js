import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <Icon name="google" size={20} color="#b6b7ba" />
              </View>
              <Text style={styles.emptyButtonText}>LOGIN WITH GOOGLE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
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
  filledButton: {
    borderRadius: 10,
    backgroundColor: '#5c6df8',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    marginTop: 40,
  },
  filledButtonText: {
    color: '#ffff',
  },
  emptyButton: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  emptyButtonText: {
    color: '#b6b7ba',
  },
  loginGoogle: {
    height: 50,
    width: '100%',
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#e3e4e5',
    borderRadius: 6,
  },
  iconSpace: {
    paddingRight: 10,
  },
  buttonWithIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
