import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Screen Imports
import Home from '../screens/Home.js';
import Activity from '../screens/Activity.js';
import Profile from '../screens/Profile.js';
import Search from '../screens/Search.js';
import Upload from '../screens/Upload.js';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// Expo Icons
import {Ionicons, Feather} from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            tabBarLabel : ' ',
            tabBarIcon : ({focused}) => <Ionicons name="ios-home" color={focused ? "blue" : 'black'} size={35}/>
        }
    },
    Search : {
        screen : Search,
        navigationOptions : {
            tabBarLabel : ' ',
            tabBarIcon : ({focused}) => <Ionicons name="ios-search" color={focused ? "blue" : 'black'} size={35} />
        }
    },
    Upload : {
        screen : Upload,
        navigationOptions : {
            tabBarLabel : ' ',
            tabBarIcon : ({focused}) => <Ionicons name="ios-add-circle-outline" color={focused ? "blue" : 'black'} size={35} />
        }
    },
    Activity :{ 
        screen : Activity,
        navigationOptions : {
            tabBarLabel : ' ',
            tabBarIcon : ({focused}) => <Ionicons name={focused ? "ios-heart" : "ios-heart-empty"} color={focused ? "blue" : 'black'} size={35} />
        }
    },
    // Upload : '',
    Profile : {
        screen : Profile,
        navigationOptions : {
            tabBarLabel : ' ',
            tabBarIcon : ({focused}) => <Ionicons name="ios-person" color={focused ? "blue" : 'black'} size={35} />
        }
    },
})

export default createAppContainer(TabNavigator);