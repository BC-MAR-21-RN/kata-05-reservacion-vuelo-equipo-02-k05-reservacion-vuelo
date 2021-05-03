import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export class DataHandler {
  constructor() {
    this.state = {
      user: this.getCurrentUser(),
    };
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  registerBooking(valuesObject) {
    const data = this.formatData(valuesObject);
    console.log(data);

    firestore()
      .collection('flights')
      .add(data)
      .then(() => {
        console.log('User added!');
      });
  }

  formatData(valuesObject) {
    const formattedData = {
      ArrCity: valuesObject.arrivalCity,
      ArrCountry: valuesObject.arrivalCountry,
      Date: {
        Day: valuesObject.day,
        Month: valuesObject.month,
        Year: valuesObject.year,
      },
      DepCity: valuesObject.departureCity,
      DepCoun: valuesObject.departureCountry,
      Passengers: valuesObject.passengers,
      uid: this.state.user.uid,
    };

    return formattedData;
  }
}
