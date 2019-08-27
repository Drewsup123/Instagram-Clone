import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Screen Imports
import Login from '../screens/Login.js';
import Signup from '../screens/Signup';
import { createStackNavigator } from 'react-navigation';
// Expo Icons
import {Ionicons, Feather} from '@expo/vector-icons';

const AuthNavigator = createStackNavigator({
    Login : {
        screen : Login,
        // navigationOptions : {
        //     tabBarLabel : ' ',
        //     tabBarIcon : ({focused}) => <Ionicons name="ios-home" color={focused ? "blue" : 'black'} size={35}/>
        // }
    },
    Signup : {
        screen : Signup,
        // navigationOptions : {
        //     tabBarLabel : ' ',
        //     tabBarIcon : ({focused}) => <Ionicons name="ios-search" color={focused ? "blue" : 'black'} size={35} />
        // }
    },
})

export default AuthNavigator;