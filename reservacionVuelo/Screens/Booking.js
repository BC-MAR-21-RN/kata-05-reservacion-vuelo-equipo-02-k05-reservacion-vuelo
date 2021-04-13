import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BookingQuestion} from '../components/BookingQuestion';

export class Booking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.return}>
          <TouchableOpacity style={styles.returnButton}>
            <Icon name="chevron-left" size={30} color="#6075e6" />
          </TouchableOpacity>
        </View>
        <View style={styles.progressCard}>
          <Text>progresscard</Text>
        </View>
        <View style={styles.component}>
          <BookingQuestion question={'Where are you now?'} />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            accessibilityLabel="Submit login information"
            style={styles.filledButton}>
            <Text style={styles.filledButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    paddingLeft: 30,
    paddingRight: 30,
  },
  returnButton: {
    paddingRight: 10,
  },
  return: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
});
