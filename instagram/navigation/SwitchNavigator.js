import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Screen Imports
import Login from '../screens/Login.js';
import Signup from '../screens/Signup';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// Expo Icons
import {Ionicons, Feather} from '@expo/vector-icons';

const SwitchNavigator = createSwitchNavigator({
    Home : {
        screen : Home,
    },
})

export default createAppContainer(SwitchNavigator);