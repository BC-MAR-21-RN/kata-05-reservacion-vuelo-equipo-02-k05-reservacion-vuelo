import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';

export class ReactNativeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text style={styles.label}>{this.props.question}</Text>
        </View>
        <View style={styles.calendar}>
          <Calendar
            current={'2021-04-13'}
            onDayPress={day => {
              this.setState({selected: day.dateString});
            }}
            markedDates={{
              [this.state.selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: '#5c6df8',
                selectedTextColor: '#ffff',
              },
            }}
            theme={{
              calendarBackground: '#fafafa',
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  question: {
    flex: 1,
    justifyContent: 'center',
  },
  calendar: {
    flex: 4,
  },
  label: {
    fontWeight: '700',
    fontSize: 45,
  },
});
