import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Step extends PureComponent {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        {this.backButton()}
        <View style={styles.card} />
        <View style={styles.label}>{this.props.children}</View>
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
        <TouchableOpacity
          accessibilityLabel="Submit login information"
          style={styles.filledButton}
          onPress={this.props.nextStep}>
          <Text style={styles.filledButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export class StepManager extends PureComponent {
  static Step = props => <Step style={styles.container} {...props} />;

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
      <View style={styles.container}>
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevState: this._prevStep,
            });
          }

          return null;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  returnButton: {
    paddingRight: 10,
  },
  return: {
    flex: 1,
  },
  progressCard: {
    flex: 2,
  },
  component: {
    flex: 8,
  },
  button: {
    flex: 2,
    flexDirection: 'column',
  },
  filledButton: {
    borderRadius: 10,
    backgroundColor: '#5c6df8',
    alignItems: 'center',
    padding: 15,
  },
  filledButtonText: {
    color: '#ffff',
    fontWeight: '700',
  },
  label: {
    flex: 10,
    justifyContent: 'flex-start',
  },
  card: {
    flex: 2,
    backgroundColor: 'orange',
  },
});
