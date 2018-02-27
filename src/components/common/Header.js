// import libraries for making a component.
import React from 'react';
import {Text, View } from 'react-native';


// make a component .
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return(
        <View style={viewStyle} >
                <Text style={textStyle}> {props.headerText} </Text>
        </View>);
}

// make a style for the Component:
const styles = {
    // new Object Proporities:
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center',
        height: 60,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position: 'relative'

    },
    textStyle:{
        fontSize: 20
    }
};


// make the Component available to other parts of the application.

export  { Header };


