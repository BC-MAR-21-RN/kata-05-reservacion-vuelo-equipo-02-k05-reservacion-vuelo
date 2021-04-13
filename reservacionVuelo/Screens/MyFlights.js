import React, {Component} from 'react';
import {View, Text, TouchableHighlight, ListView, FlatList} from 'react-native';
import styles from '../components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlightCard} from '../components/flightCard';

const dummyData = [
  {
    id: 1,
    departureCity: 'AGS',
    departureCountry: 'MEXICO',
    arrivalCity: 'LA',
    arrivalCountry: 'USA',
    year: 2021,
    month: 'April',
    day: 30,
    passangers: 2,
  },
  {
    id: 2,
    departureCity: 'COL',
    departureCountry: 'MEXICO',
    arrivalCity: 'NY',
    arrivalCountry: 'USA',
    year: 2021,
    month: 'April',
    day: 22,
    passangers: 3,
  },
  {
    id: 3,
    departureCity: 'MED ',
    departureCountry: 'CDMX',
    arrivalCity: 'BRL',
    arrivalCountry: 'GERMANY',
    year: 2021,
    month: 'April',
    day: 28,
    passangers: 3,
  },
];

export class MyFlights extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.myFlightsContainer}>
        <Text style={styles.titleStyle}>My Flights</Text>
        <FlatList
          style={styles.cardPosition}
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
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
        <TouchableHighlight style={styles.roundedButton}>
          <Icon name="plus" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>
      </View>
    );
  }
}
