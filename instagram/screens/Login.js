import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import AuthStyles from '../styles/AuthStyles';
import { connect } from 'react-redux';
import {login} from '../Redux/actions/index'

class Login extends React.Component {

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
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={GlobalStyles.container}>
                <Button onPress={() => this.props.navigation.navigate('Signup')} title="Signup" />
                <Text>Login</Text>
                <TextInput 
                    style={AuthStyles.textInput}
                    name="email"
                    value={this.state.email} 
                    onChangeText = {text => this.onChangeHandler(text, "email")} 
                    placeholder="email"
                />

                <TextInput 
                    style={AuthStyles.textInput}
                    name="password"
                    value={this.state.password} 
                    onChangeText = {text => this.onChangeHandler(text, "password")} 
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <Button
                    style={AuthStyles.button}
                    onPress={this.login} 
                    title="Submit" 
                />
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

export default connect(mapStateToProps, {login})(Login);