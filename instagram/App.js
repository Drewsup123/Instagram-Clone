import React from 'react';
import { Text, View } from 'react-native';
// Component Imports
import TabNavigator from './navigation/TabNavigator.js';
// Redux Imports
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './Redux/reducers/index.js';

const store = createStore(
	reducer,
	applyMiddleware(thunk, logger)
)

export default function App() {
	return (
    	<Provider store={store}>
			<TabNavigator />
    	</Provider>
	);
}
