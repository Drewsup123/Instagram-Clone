import React from 'react';
import {Text, View} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default class Login extends React.Component {
    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>Login</Text>
            </View>
        );
    }
}