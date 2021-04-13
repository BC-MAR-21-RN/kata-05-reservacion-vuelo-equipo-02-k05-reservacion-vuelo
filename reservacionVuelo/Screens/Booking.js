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
          <BookingQuestion />
        </View>
        <View style={styles.button}>
          <Text>button</Text>
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
    padding: 13,
  },
  return: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressCard: {
    backgroundColor: 'red',
    flex: 2,
  },
  component: {
    backgroundColor: 'darkorange',
    flex: 8,
  },
  button: {
    backgroundColor: 'green',
    flex: 2,
  },
});
