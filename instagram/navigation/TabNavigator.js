import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Screen Imports
import Home from '../screens/Home.js';
import Activity from '../screens/Activity.js';
import Profile from '../screens/Profile.js';
import Search from '../screens/Search';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// Expo Icons
import {Ionicons, Feather} from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            tabBarLabel : '',
            tabBarIcon : () => <Ionicons name="ios-home" color="green" size={35}/>
        }
    },
    Activity :{ 
        screen : Activity,
        navigationOptions : {
            tabBarLabel : '',
            tabBarIcon : () => <Feather name="activity" color="green" size={35} />
        }
    },
    // Upload : '',
    Profile : {
        screen : Profile,
        navigationOptions : {
            tabBarLabel : '',
            tabBarIcon : () => <Feather name="profile" color="green" size={35} />
        }
    },
    Search : Search
})

export default createAppContainer(TabNavigator);