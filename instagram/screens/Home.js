import React from 'react';
import {Text, View} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { connect } from 'react-redux';

class Home extends React.Component {
    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user : state.user,
        loggedIn : state.loggedIn
    }
}

export default connect(mapStateToProps)(Home)