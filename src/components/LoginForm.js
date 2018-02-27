import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, CardSection, Button, Card, Input,Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { connect } from 'react-redux';

class LoginForm extends Component{

  onEmailChange(emailText){
    this.props.emailChanged(emailText);
  };

  onPasswordChange( passwordText ){
    this.props.passwordChanged(passwordText);
  }
  onButtonPress(){
    const { email, password } = this.props;
    this.props.loginUser( {email, password });
  }

  renderButton(){
    if ( this.props.loading )
    {
      return <Spinner size = "large" />
    }
    return (
    <Button onPress={ this.onButtonPress.bind( this ) }>
      Login
    </Button>
    );
  };

  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label = 'Email'
            placeholder = 'user@gmail.com'
            onChangeText = {this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>


        <CardSection>
          <Input
            label = 'Password'
            placeholder = '*******'
            secureTextEntry
            onChangeText = {this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />

        </CardSection>

        <Text style={ styles.errorTextStyle }> { this.props.error}</Text>

        <CardSection>
          { this.renderButton() }
        </CardSection>

      </Card>
    );
  };
};

const styles = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({auth}) =>{
  const {email, password, error, loading } = auth;
  return{email, password, error, loading }
}
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm) ;

