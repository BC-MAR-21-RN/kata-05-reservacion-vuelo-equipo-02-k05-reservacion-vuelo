import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {MONTHS} from './constants';

export class FlightCard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <View style={styles.locationDets}>
          <View>
            <Text style={styles.cityText}>{this.props.depCity}</Text>
            <Text style={styles.countryText}>{this.props.depCountry}</Text>
          </View>
          <View style={styles.absoluteIcon}>
            <View style={styles.relativeIcon}>
              <Icon name="plane" style={styles.planeIcon} size={25} />
            </View>
          </View>
          <View>
            <Text style={styles.cityText}>{this.props.arrCity}</Text>
            <Text style={styles.countryText}>{this.props.arrCountry}</Text>
          </View>
        </View>
        <View style={styles.flightDets}>
          <Text style={styles.bottonFlightDetsText}>
            {MONTHS[this.props.month - 1]} {this.props.day}
            {this.props.day ? ',' : ''} {this.props.year}
          </Text>
          <Text style={styles.bottonFlightDetsText}>
            {this.props.passangers} {this.props.passangers ? 'passengers' : ''}
          </Text>
        </View>
      </View>
    );
  }
}
