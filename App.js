/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import Router from './src/Router';
export default class App extends Component<{}> {

  //Firebase configuration:
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyCeQk0K5JnwJSiJN3k_wp8S9bP1Re6xTqM',
      authDomain: 'manager-e47a4.firebaseapp.com',
      databaseURL: 'https://manager-e47a4.firebaseio.com',
      projectId: 'manager-e47a4',
      storageBucket: 'manager-e47a4.appspot.com',
      messagingSenderId: '723126892592'
    };
    firebase.initializeApp(config);
  };


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store }>
        <LoginForm/>
      </Provider>
    );
  }
}


