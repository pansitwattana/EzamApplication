import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import { Button, List, InputItem, WhiteSpace } from 'antd-mobile';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  onSubmit(email, password) {
    Keyboard.dismiss();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res)
        Actions.answer()
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <List>
          <InputItem
            onChange={email => this.setState({ email })}
            value={this.state.email}
            placeholder="youremail@gmail.com"
            clear
            maxLength={20}
          />
          <WhiteSpace />
          <InputItem
            onChange={password => this.setState({ password })}
            value={this.state.password}
            placeholder='**********'
            type='password'
            clear
            maxLength={10}
          />
        </List>
        <WhiteSpace />
        <Button 
          onPressIn={() => this.onSubmit(this.state.email, this.state.password)}
        >
            Login
        </Button>
      </View>
    );
  }
}

export default LoginForm;
