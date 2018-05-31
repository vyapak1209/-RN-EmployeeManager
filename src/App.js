import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from './components/common';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
import firebase from 'react-native-firebase';
import LoginForm from './components/LoginForm';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];

class App extends Component{

    
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store = {store} >
                    <RouterComponent />
            </Provider>
        );
    }
}

export default App;