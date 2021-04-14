import React, {Component} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../components/styles';

export class SignUp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.titleStyle}>Sign Up</Text>
        {/**TextInputs */}
        <View style={styles.textInputSpacing}>
          <Text style={styles.textInputTitle}>First Name</Text>
          <TextInput style={styles.textInputStyle} />
        </View>
        <View style={styles.textInputSpacing}>
          <Text style={styles.textInputTitle}>E-mail *</Text>
          <TextInput style={styles.textInputStyle} />
        </View>
        <View style={styles.textInputSpacing}>
          <Text style={styles.textInputTitle}>Password *</Text>
          <TextInput style={styles.textInputStyle} secureTextEntry={true} />
        </View>

        {/**CheckBoxes */}
        <View style={styles.checkBoxAlignment}>
          <CheckBox tintColors={{true: '#5974F5'}} />
          <Text style={styles.bottomTextStyle}>
            I agree to the <Text style={styles.hyperlinkText}>Terms</Text> and{' '}
            <Text style={styles.hyperlinkText}>Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.checkBoxAlignment}>
          <CheckBox tintColors={{true: '#5974F5'}} />
          <Text style={styles.bottomTextStyle}>
            Subscribe for select product update
          </Text>
        </View>

        {/* Buttons */}
        <TouchableHighlight style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>Sign Up</Text>
        </TouchableHighlight>
        <Text style={styles.bottomTextStyle}>or</Text>
        <TouchableHighlight style={styles.buttonStyle}>
          <Icon name="sc-google-plus" color={'white'} size={15}>
            <Text style={styles.buttonTextStyle}> Login with Google</Text>
          </Icon>
        </TouchableHighlight>
        <Text style={styles.bottomTextStyle}>
          Already have an acoount?{' '}
          <Text style={styles.hyperlinkText}>Log in</Text>
        </Text>
      </View>
    );
  }
}
