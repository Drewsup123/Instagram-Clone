import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import AuthStyles from '../styles/AuthStyles';
import { connect } from 'react-redux';
import {login} from '../Redux/actions/index'

class Signup extends React.Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            username : "",
            bio : "",
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
                    style={AuthStyles.textInput}
                />

                <TextInput 
                    name="password"
                    value={this.state.password} 
                    onChangeText = {text => this.onChangeHandler(text, "password")} 
                    placeholder="Password"
                    secureTextEntry={true}
                    style={AuthStyles.textInput}
                />

                <TextInput 
                    name="username"
                    value={this.state.username} 
                    onChangeText = {text => this.onChangeHandler(text, "username")} 
                    placeholder="Username"
                    style={AuthStyles.textInput}
                />

                <TextInput 
                    name="bio"
                    value={this.state.bio} 
                    onChangeText = {text => this.onChangeHandler(text, "bio")} 
                    placeholder="A short bio about yourself"
                    style={AuthStyles.textInput}
                />

                <Button onPress={this.login} title="Submit" style={AuthStyles.button}/>
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