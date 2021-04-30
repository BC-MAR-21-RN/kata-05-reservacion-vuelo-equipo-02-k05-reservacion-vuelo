import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../components/BookingStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlightCard} from './flightCard';

class Step extends Component {
  state = {};

  render() {
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
          })}
        </View>
        {this.nextButton()}
      </View>
    );
  }

  backButton() {
    return (
      <View style={styles.return}>
        {
          this.props.isFirst ? (

            <View />

          ) : (
            <TouchableOpacity
            style={styles.returnButton}
            onPress={this.props.prevState}>
            <Icon name="chevron-left" size={30} color="#6075e6" />
          </TouchableOpacity>
          )
        }
      </View>
    );
  }

  nextButton() {
    return (
      <View style={styles.button}>
        {this.props.isLast ? (
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.filledButton}
            onPress={this.props.nextStep}>
            <Text style={styles.filledButtonText}>FINISH</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.filledButton}
            onPress={this.props.nextStep}>
            <Text style={styles.filledButtonText}>NEXT</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export class StepManager extends Component {
  static Step = props => <Step style={styles.stepContainer} {...props} />;

  state = {
    index: 0,

    values: {
      ...this.props.initialValues,
    },
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
    }));
  };

  render() {
    console.log('values', this.state);
    return (
      <View style={styles.stepContainer}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevState: this._prevStep,
              isLast: this.state.index === this.props.children.length - 1,
              isFirst:this.state.index === 0,
              onChangeValue: this._onChangeValue,
              values: this.state.values,
            });
          }

          return null;
        })}
      </View>
    );
  }
}
