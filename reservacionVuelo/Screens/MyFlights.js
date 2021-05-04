import React, {Component} from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import styles from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlightCard} from '../components/flightCard';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

export class MyFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      firestoreData: [],
    };
    this.getFlights();
    this.listener = this.updateData();
  }

  buttons() {
    return (
      <View>
        <TouchableHighlight
          style={styles.roundedButton}
          onPress={() => this.props.navigation.navigate('Booking')}>
          <Icon name="plus" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>
        {/* <TouchableHighlight
          style={styles.roundedButton}
          onPress={() => {
            auth().signOut();
          }}>
          <Icon name="sign-out" style={styles.roundedButtonIcon} size={35} />
        </TouchableHighlight>*/}
      </View>
    );
  }
  componentDidMount() {
    this.getFlights();
  }

  updateData() {
    firestore()
      .collection('flights')
      .onSnapshot(doc => {
        this.getFlights();
      });
  }

  async getFlights() {
    try {
      let dataArray = [];
      const data = await firestore()
        .collection('flights')
        .where('uid', '==', firebase.auth().currentUser.uid)
        .get()
        .then(snapShot => {
          snapShot.docs.forEach((doc, index) => {
            doc._data.id = index;
            dataArray.push(doc._data);
          });
          this.setState({firestoreData: dataArray});
        });
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
          renderItem={({item}) => (
            <View>
              <FlightCard
                depCity={item.DepCity}
                depCountry={item.DepCoun}
                arrCity={item.ArrCity}
                arrCountry={item.ArrCoun}
                year={item.Date.Year}
                month={item.Date.Month}
                day={item.Date.Day}
                passangers={item.Passengers}
              />
              <View style={styles.separator} />
            </View>
          )}
        />
        {this.buttons()}
      </View>
    );
  }
}
