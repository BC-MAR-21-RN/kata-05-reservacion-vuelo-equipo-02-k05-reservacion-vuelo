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
