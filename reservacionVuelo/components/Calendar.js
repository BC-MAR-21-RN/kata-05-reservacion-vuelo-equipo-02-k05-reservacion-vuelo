import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {styles} from '../components/BookingStyles';

export class ReactNativeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }

  _onChangeText = text => {
    this.props.onChangeValue(this.props.month, text.month);
    this.props.onChangeValue(this.props.day, text.day);
    this.props.onChangeValue(this.props.year, text.year);
    this.props.onChangeValue(this.props.name, text);
  };

  render() {
    const {onChangeValue, name, day, month, year, ...rest} = this.props;
    return (
      <View style={styles.componentContainer}>
        <View style={styles.question}>
          <Text style={styles.label}>Select date</Text>
        </View>
        <View style={styles.calendar}>
          <Calendar
            {...rest}
            current={'2021-04-13'}
            onDayPress={day => {
              this._onChangeText(day);
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
