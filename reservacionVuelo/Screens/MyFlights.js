import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import styles from '../components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlightCard } from '../components/flightCard';
import dummyData from '../data/DummyData';

import auth from '@react-native-firebase/auth';


export class MyFlights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.myFlightsContainer}>
        <Text style={styles.titleStyle}>{this.props.uid}My Flights</Text>
        <FlatList
          style={styles.cardPosition}
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FlightCard
              depCity={item.departureCity}
              depCountry={item.departureCountry}
              arrCity={item.arrivalCity}
              arrCountry={item.arrivalCountry}
              year={item.year}
              month={item.month}
              day={item.day}
              passangers={item.passangers}
            />
          )}
        />
        <TouchableHighlight style={styles.roundedButton}
          onPress={() => this.props.navigation.navigate('Booking')} >
          <Icon name="plus" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.roundedButton}
          onPress={() => {
            auth().signOut()}} >
          <Icon name="sign-out" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>
      </View>
    );
  }
}
