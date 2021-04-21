import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../components/BookingStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

class Step extends PureComponent {
  state = {};

  render() {
    return (
      <View style={styles.stepContainer}>
        {this.backButton()}
        <View style={styles.card} />
        <View style={styles.questionText}>{this.props.children}</View>
        {this.nextButton()}
      </View>
    );
  }

  backButton() {
    return (
      <View style={styles.return}>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={this.props.prevState}>
          <Icon name="chevron-left" size={30} color="#6075e6" />
        </TouchableOpacity>
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

export class StepManager extends PureComponent {
  static Step = props => <Step style={styles.stepContainer} {...props} />;

  state = {
    index: 0,
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
            });
          }

          return null;
        })}
      </View>
    );
  }
}
