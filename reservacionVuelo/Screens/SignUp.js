import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export class SignUp extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.mainContainer} >

                <Text style={styles.titleStyle}>Sign Up</Text>

                {/**TextInputs */}
                <View style={styles.textInputSpacing}>
                    <Text style={styles.textInputTitle}>First Name</Text>
                    <TextInput style={styles.textInputStyle}></TextInput>
                </View>
                <View style={styles.textInputSpacing}>
                    <Text style={styles.textInputTitle}>E-mail *</Text>
                    <TextInput style={styles.textInputStyle}></TextInput>
                </View>
                <View style={styles.textInputSpacing}>
                    <Text style={styles.textInputTitle}>Password *</Text>
                    <TextInput style={styles.textInputStyle} secureTextEntry={true}></TextInput>
                </View>

                {/**CheckBoxes */}
                <View style={styles.checkBoxAlignment}>
                    <CheckBox tintColors={{ true: '#5974F5' }} />
                    <Text style={styles.bottomTextStyle}>I agree to the <Text style={styles.hyperlinkText}>Terms</Text> and <Text style={styles.hyperlinkText}>Privacy Policy</Text></Text>
                </View>
                <View style={styles.checkBoxAlignment}>
                    <CheckBox tintColors={{ true: '#5974F5' }} />
                    <Text style={styles.bottomTextStyle}>Subscribe for select product update</Text>
                </View>

                {/* Buttons */}
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Sign Up</Text>
                </TouchableHighlight>
                <Text style={{ textAlign: 'center', color: '#A3ACB9', fontSize: 15, paddingVertical:15 }}>or</Text>
                <TouchableHighlight style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Sign Up with Google</Text>
                </TouchableHighlight>
                <Text style={styles.bottomTextStyle}>Already have an acoount? <Text style={styles.hyperlinkText}>Log in</Text></Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 30,
        flex: 1,
    },
    titleStyle: {
        fontSize: 40,
        fontWeight: '700',
        color: '#5974F5'
    },
    textStyle: {
        color: '#868686',
    },
    bottomTextStyle: {
        textAlign: 'center',
        color: '#A3ACB9',
        fontSize: 15,
        paddingVertical:10
    },
    textInputTitle: {
        fontSize: 15,
        paddingBottom:5
    },
    textInputStyle: {
        borderWidth: 1,
        borderBottomColor: 'black',
        width: 350,
        height: 50,
    },
    textInputSpacing:{
        paddingVertical: 10
    },
    checkBoxAlignment: {
        flexDirection: 'row',
        alignItems: 'center',
        right: 5
    },
    buttonStyle: {
        backgroundColor: '#5974F5',
        borderRadius: 5,
        height: 50
    },
    buttonTextStyle: {
        top: 15,
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    hyperlinkText: {
        color: '#5974F5',
        textDecorationLine: 'underline'
    }

})