import React, {Component} from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../components/styles';
import {CustomCheckbox} from '../components/checkbox';
import {CustomTextInput} from '../components/TextInput';

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegex = /^[A-Za-z]+$/;

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nameStatus: false,
      email: '',
      emailStatus: false,
      password: '',
      passwordStatus: false,
      checkBox: false,
      checkBoxSub: true,
    };
  }

  check() {
    if (
      this.state.passwordStatus === true &&
      this.state.nameStatus === true &&
      this.state.emailStatus === true &&
      this.state.checkBox === true
    ) {
      Alert.alert('VALIDATIONS PASSED', ':)')
      this.SignUpEmail(this.state.name, this.state.email, this.state.password);
    } else {
      Alert.alert('VALIDATIONS NOT PASSED', ':(')
    }
  }
  SignUpEmail(name, email, password) {
    /*/
    TODO:
    SignUp with email using firebase
    /*/
  }
  SignUpGoogle() {
    /**
     * TODO:
     * SIGNUP WITH GOOGLE USING FIREBASE
     */
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.titleStyle}>Sign Up</Text>

        {/**TextInputs */}

        <CustomTextInput
          textInputTitle={'First Name'}
          onChangeText={text =>
            this.setState({
              name: text,
              nameStatus: nameRegex.test(this.state.name),
            })
          }
          checkError={this.state.nameStatus === false}
          errorMessage={'Write a valid name please'}
        />
        
        <CustomTextInput
          textInputTitle={'E-mail'}
          keyboardType={'email-address'}
          onChangeText={text => {
            this.setState({
              email: text,
              emailStatus: emailRegex.test(this.state.email),
            });
          }}
          checkError={this.state.emailStatus === false}
          errorMessage={'Write a valid email please'}
        />

        <CustomTextInput
          textInputTitle={'Password'}
          password={true}
          onChangeText={text => {
            this.setState({password: text});
            this.state.password.length > 4
              ? this.setState({passwordStatus: true})
              : this.setState({passwordStatus: false});
          }}
          checkError={this.state.passwordStatus === false}
          errorMessage={'Write a password with 6 or more characters'}
        />

        {/**CheckBoxes */}
        <CustomCheckbox
          value={this.state.checkBox}
          onValueChange={() => this.setState({checkBox: !this.state.checkBox})}
          text={'I agree to the '}
          labelText={'Terms'}
          secondaryText={' and '}
          secondaryLabelText={'Privacy Policy.'}
          check={this.state.checkBox}
          errorMessage={'Terms and privacy policy must be checked'}
        />

        <CustomCheckbox
          value={this.state.checkBoxSub}
          onValueChange={() =>
            this.setState({checkBoxSub: !this.state.checkBoxSub})
          }
          text={'Subscribe for select product update'}
        />

        {/* Buttons */}

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => {
            this.check();
          }}>
          <Text style={styles.buttonTextStyle}>Sign Up</Text>
        </TouchableHighlight>

        <Text style={styles.bottomTextStyle}>or</Text>

        <TouchableHighlight style={styles.buttonStyle}>
          <Icon name="google" color={'white'} size={15}>
            <Text style={styles.buttonTextStyle}> Login with Google</Text>
          </Icon>
        </TouchableHighlight>
        <Text style={styles.bottomTextStyle}>
          Already have an acoount?
          <Text style={styles.hyperlinkText}>Log in</Text>
        </Text>
      </View>
    );
  }
}
