import React, { Component } from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import styles from '../components/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlightCard } from '../components/flightCard';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const user = firebase.auth().currentUser

export class MyFlights extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
      firestoreData: []
    };
  }
  buttons() {
    return (
      <View>
        <TouchableHighlight style={styles.roundedButton}
          onPress={() => this.props.navigation.navigate('Booking')} >
          <Icon name="plus" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>
        <TouchableHighlight style={styles.roundedButton}
          onPress={() => {
            auth().signOut()
          }} >
          <Icon name="sign-out" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>

      </View>
    )
  }
  componentDidMount(){
    this.getFlights()
  }
  async getFlights() {
    try {
      let dataArray = []
      const data = await firestore()
        .collection('flights')
        .where('uid', '==', user.uid)
        .get()
        .then(
          snapShot => {
            snapShot.docs.forEach((doc, index) => {
              doc._data.id = index
              dataArray.push(doc._data)
            })
            this.setState({ firestoreData: dataArray })
            console.log(dataArray);
          })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.myFlightsContainer}>
        <Text style={styles.titleStyle}>{this.props.uid}My Flights</Text>
        <FlatList
          style={styles.cardPosition}
          data={this.state.firestoreData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FlightCard
              depCity={item.DepCity}
              depCountry={item.DepCoun}
              arrCity={item.ArrCity}
              arrCountry={item.ArrCoun}
              year={item.Date.Year}
              month={months[item.Date.Month - 1]}
              day={item.Date.Day}
              passangers={item.Passengers}
            />
          )}
        />
        {this.buttons()}
      </View>
    );
  }
}
