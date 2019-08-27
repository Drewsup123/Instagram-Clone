import React from 'react';
import { Text, View } from 'react-native';
// Component Imports
import SwitchNavigator from './navigation/SwitchNavigator.js';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './Redux/reducers/index.js';
import InitializeFirebase from './firebase/InitializeFirebase';

try{
	InitializeFirebase()
}catch{}

const store = createStore(
	reducer,
	applyMiddleware(thunk, logger)
)

export default function App() {
	return (
    	<Provider store={store}>
			<SwitchNavigator />
    	</Provider>
	);
}
