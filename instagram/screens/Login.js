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
        if(email && password){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                const userData = {
                    uid : user.uid,
                    email : user.email,
                }
                this.props.signup(userData);
                this.props.navigation.navigate('Home')
            })
            .catch(err => {
                console.log(err)
                this.setState({ errorMessage : err.message })
            })
        }else{
            this.setState({ errorMessage : "Please fill out all fields"});
        }
    }

    render(){
        return(
            <View style={GlobalStyles.container}>
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

                <Text>Don't have an account?</Text>
                <Button onPress={() => this.props.navigation.navigate('Signup')} title="Signup" />
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