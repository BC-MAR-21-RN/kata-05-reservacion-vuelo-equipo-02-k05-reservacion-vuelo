import React, {Component} from 'react';
import {Alert, Text, TouchableHighlight, View} from 'react-native';
import styles from '../components/styles';
import {CustomCheckbox} from '../components/checkbox';
import {CustomTextInput} from '../components/TextInput';
import * as myConst from '../components/constants';



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
      Alert.alert('VALIDATIONS PASSED', ':)');
      this.SignUpEmail(this.state.name, this.state.email, this.state.password);
    } else {
      Alert.alert('VALIDATIONS NOT PASSED', ':(');
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
              nameStatus: myConst.NAME_REGEX.test(this.state.name),
            })
          }
          checkError={this.state.nameStatus === false}
          errorMessage={myConst.NAME_ERROR_MSJ}
        />

        <CustomTextInput
          textInputTitle={'E-mail'}
          keyboardType={'email-address'}
          onChangeText={text => {
            this.setState({
              email: text,
              emailStatus: myConst.EMAIL_REGEX.test(this.state.email),
            });
          }}
          checkError={this.state.emailStatus === false}
          errorMessage={myConst.EMAIL_ERROR_MSJ}
        />

        <CustomTextInput
          textInputTitle={'Password'}
          password={true}
          onChangeText={text => {
            this.setState({password: text});
            this.state.password.length >= 5
              ? this.setState({passwordStatus: true})
              : this.setState({passwordStatus: false});
          }}
          checkError={this.state.passwordStatus === false}
          errorMessage={myConst.PASSWORD_ERROR_MSJ}
        />

        {/**CheckBoxes */}
        <CustomCheckbox
          value={this.state.checkBox}
          onValueChange={() => this.setState({checkBox: !this.state.checkBox})}
          text={myConst.TP_AGREEMENT.substr(0, 14)}
          labelText={myConst.TP_AGREEMENT.substr(15, 5)}
          secondaryText={myConst.TP_AGREEMENT.substr(20, 4)}
          secondaryLabelText={myConst.TP_AGREEMENT.substr(25, 16)}
          check={this.state.checkBox}
          errorMessage={myConst.TP_ERROR_MSJ}
        />

        <CustomCheckbox
          value={this.state.checkBoxSub}
          onValueChange={() =>
            this.setState({checkBoxSub: !this.state.checkBoxSub})
          }
          text={myConst.SUB_MSJ}
        />

        {/* Buttons */}
        <SignUpButton onPress={()=> this.check()} title={'Sign Up'}/>

        <Text style={styles.bottomTextStyle}>or</Text>

        <SignUpButton onPress={()=> {}} title={'Sign Up with google'} icon={'google'}/>

        <Text style={styles.bottomTextStyle}>
          Already have an acoount?
          <Text style={styles.hyperlinkText}> Log in</Text>
        </Text>
      </View>
    );
  }
}
