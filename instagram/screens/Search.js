import React from 'react';
import {Text, View} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default class Search extends React.Component {
    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>Search</Text>
            </View>
        );
    }
}