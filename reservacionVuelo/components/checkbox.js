import CheckBox from '@react-native-community/checkbox';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

export class CustomCheckbox extends Component {
  render() {
    return (
      <View>
        <View style={styles.checkBoxAlignment}>
          <CheckBox
            tintColors={{true: '#5974F5'}}
            value={this.props.value}
            onValueChange={this.props.onValueChange}
          />
          <Text style={styles.bottomTextStyle}>
            {this.props.text}{' '}
            <Text style={styles.hyperlinkText}>{this.props.labelText}</Text>
            {this.props.secondaryText}
            <Text style={styles.hyperlinkText}>
              {' '}
              {this.props.secondaryLabelText}
            </Text>
          </Text>
        </View>
        <View>
          {this.props.check === false ? (
            <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
          ) : null}
        </View>
      </View>
    );
  }
}
