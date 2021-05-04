import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/BookingStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlightCard} from './flightCard';

import {DataHandler} from '../Utils/DataHandler';

export class Step extends Component {
  constructor(props) {
    super(props);
    this.steps = [
      ['departureCity'],
      ['arrivalCity'],
      ['day'],
      ['passengers'],
      ['departureCountry'],
    ];
  }

  render() {
    console.log(this.props.values);
    return (
      <View style={styles.stepContainer}>
        {this.backButton()}
        <View style={styles.card}>
          <FlightCard
            depCity={this.props.values.departureCity}
            depCountry={this.props.values.departureCountry}
            arrCity={this.props.values.arrivalCity}
            arrCountry={this.props.values.arrivalCountry}
            month={this.props.values.month}
            day={this.props.values.day}
            year={this.props.values.year}
            passangers={this.props.values.passengers}
          />
        </View>
        <View style={styles.questionText}>
          {this.props.children({
            onChangeValue: this.props.onChangeValue,
            register: this.props.register,
          })}
        </View>
        {this.nextButton()}
      </View>
    );
  }

  backButton() {
    return (
      <View style={styles.return}>
        {this.props.isFirst ? (
          <View />
        ) : (
          <TouchableOpacity
            style={styles.returnButton}
            onPress={this.props.prevState}>
            <Icon name="chevron-left" size={30} color="#6075e6" />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  validation() {
    let val = false;

    if (this.props.values[this.steps[this.props.currentIndex][0]] !== '') {
      val = true;
    }

    return val;
  }

  nextButton() {
    return (
      <View style={styles.button}>
        {this.props.isLast ? (
          <View />
        ) : (
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            disabled={!this.validation()}
            style={
              !this.validation()
                ? styles.filledButtonDisabled
                : styles.filledButton
            }
            onPress={this.props.nextStep}>
            <Text style={styles.filledButtonText}>NEXT</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export class StepManager extends Component {
  constructor(props) {
    super(props);
    this.dataHandler = new DataHandler();
  }

  static Step = props => <Step style={styles.stepContainer} {...props} />;

  state = {
    index: 0,

    values: {
      ...this.props.initialValues,
    },
    disabled: true,
  };

  _nextStep = () => {
    if (this.state.index !== this.props.children.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  };

  _prevStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    }
  };

  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
      disabled: false,
    }));
  };

  _register = () => {
    this.dataHandler.registerBooking(this.state.values);
  };

  render() {
    return (
      <View style={styles.stepContainer}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevState: this._prevStep,
              isLast: this.state.index === this.props.children.length - 1,
              isFirst: this.state.index === 0,
              onChangeValue: this._onChangeValue,
              register: this._register,
              values: this.state.values,
              disabled: this.state.disabled,
            });
          }

          return null;
        })}
      </View>
    );
  }
}
