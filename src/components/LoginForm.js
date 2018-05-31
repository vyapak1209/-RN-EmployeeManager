import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection, Input, Button, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';


class LoginForm extends Component {


    onEmailChange(text) {
        this.props.emailChanged(text); 
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if(this.props.error){
            return(
                <View style= {{backgroundColor: 'white'}}>
                    <Text style = {styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size = 'small'/>
        }

        return (
            <Button onPress = {this.onButtonPress.bind(this)}>
                Log In!
            </Button>
        );
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        value = {this.props.email}
                        onChangeText = {this.onEmailChange.bind(this)} 
                        label = 'Email'
                        placeholder = 'user@gmail.com'
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        value = {this.props.password}
                        onChangeText = {this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label = 'Password'
                        placeholder = 'password'
                        />
                </CardSection>

                {this.renderError()}

                <CardSection>
                        {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};



const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};





export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);