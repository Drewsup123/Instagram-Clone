import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { connect } from 'react-redux';
import {login} from '../Redux/actions/index'

class Signup extends React.Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
        }
    }

    onChangeHandler = (text, value) => {
        this.setState({[value] : text});
    }

    login = () => {
        const {email, password} = this.state;
        this.props.login(email, password);
    }

    render(){
        return(
            <View style={GlobalStyles.container}>
                <Text>Signup</Text>
                <TextInput 
                    name="email"
                    value={this.state.email} 
                    onChangeText = {text => this.onChangeHandler(text, "email")} 
                    placeholder="email"
                />

                <TextInput 
                    name="password"
                    value={this.state.password} 
                    onChangeText = {text => this.onChangeHandler(text, "password")} 
                    placeholder="Password"
                />

                <Button onPress={this.login} title="Submit" />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user : state.user,
        loggedIn : state.loggedIn,
    }
}

export default connect(mapStateToProps, {login})(Signup);