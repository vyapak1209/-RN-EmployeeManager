import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common'; 
import {connect} from 'react-redux';
import {Picker, Text} from 'react-native';
import {employeeUpdate} from '../actions';


class EmployeeCreate extends Component {
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        onChangeText = {text => this.props.employeeUpdate({prop: 'name', value: text})} 
                        value = {this.props.name}
                        label = 'Name'
                        placeholder = 'Jane'
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        onChangeText = {text => this.props.employeeUpdate({prop: 'phone', value: text})}
                        value = {this.props.phone}
                        label = 'Phone'
                        placeholder = '9009009009'
                        />
                </CardSection>

                <CardSection>

                    <Picker 
                        selectedValue = {this.props.shift}
                        onValueChange = {day => this.props.employeeUpdate({prop: 'shift', value: day})}
                        style ={{flex: 1}}
                        >
                        
                        <Picker.Item label = 'Select Shift' value = 'Monday'/>
                        <Picker.Item label = 'Monday' value = 'Monday'/>
                        <Picker.Item label = 'Tuesday' value = 'Tuesday'/>
                        <Picker.Item label = 'Wednesday' value = 'Wednesday'/>
                        <Picker.Item label = 'Thursday' value = 'Thursday'/>
                        <Picker.Item label = 'Friday' value = 'Friday'/>
                        <Picker.Item label = 'Saturday' value = 'Saturday'/>
                        <Picker.Item label = 'Sunday' value = 'Sunday'/>
                    </Picker>
                </CardSection>

                <CardSection> 
                    <Button>
                        Create!    
                    </Button>    
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);