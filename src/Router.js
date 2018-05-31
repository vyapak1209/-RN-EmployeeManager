import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key = 'root' hideNavBar>
                <Scene key = 'auth'>
                    <Scene 
                        key = 'login' 
                        component = {LoginForm} 
                        title = 'Login' 
                        titleStyle = {{flex: 1, textAlign: 'center'}}
                        initial 
                    />
                </Scene>

                <Scene key = 'main'>
                    <Scene 
                        onRight = {() => Actions.employeeCreate()}
                        key = 'employeeList'
                        component = {EmployeeList}
                        title = 'Employees'
                        titleStyle = {{flex: 1, textAlign: 'center'}}
                        rightTitle = 'Add'
                        initial
                    />

                    <Scene
                        key = 'employeeCreate'
                        component = {EmployeeCreate}
                        title = 'Add Employee'
                        titleStyle = {{flex: 1, textAlign: 'center'}}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};




export default RouterComponent;