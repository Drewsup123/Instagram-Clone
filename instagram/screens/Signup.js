import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import AuthStyles from '../styles/AuthStyles';
import { connect } from 'react-redux';
import {signup} from '../Redux/actions/index';
import * as firebase from 'firebase';

class Signup extends React.Component {

    constructor(){
        super();
        this.state = {
            email : "",
            password : "",
            username : "",
            bio : "",
            errorMessage : "",
        }
    }

    onChangeHandler = (text, value) => {
        this.setState({[value] : text});
    }

    signup = () => {
        const {email, password} = this.state;
        if(email && password){
            firebase.auth().createUserWithEmailAndPassword(email, password)
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
                <Text>Signup</Text>
                <Text style={{color : "red"}} >{this.state.errorMessage}</Text>
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

                <Button onPress={this.signup} title="Submit" style={AuthStyles.button}/>
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

export default connect(mapStateToProps, {signup})(Signup);