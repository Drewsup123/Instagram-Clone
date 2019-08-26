import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Screen Imports
import Home from '../screens/Home.js';
import Activity from '../screens/Activity.js';
import Profile from '../screens/Profile.js';
import Search from '../screens/Search';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    Home : Home,
    Activity : Activity,
    Profile : Profile,
    Search : Search
})

export default createAppContainer(TabNavigator);