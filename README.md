# React-Native-Demo-App

Welcome to my first demo app for React Native!

I had no idea what I wanted to demo for my first demo app. My original plans were to write a bland calculator app like every other intro Computer Science project, but I realized that a calculator app wouldn't demonstate the skills needed to work on high end projects with APIs. Instead this app has 6 components, all of which demonstrate different abilities and skills within React Native.

Component 1:
Demonstrates a simple textview.

Component 2:
Demonstrates In Line Styles, StyleSheet, Touchable Highlight, and Touchable Opacity. 

Component 3:
Demonstrates the ability to use a text input and switch. The text input is mirrored right below the input box. Input box comes pre filled with "Hello".

Component 4:
Demonstrates ListView. I realize the ListView package will soon be removed, but I put it in to show skills with package after working through a tutorial.

Component 5:
Demonstrates the ability to retrieve data from an API. API comes from the website: https://jsonplaceholder.typicode.com/users

Component 6:
Demonstrates the ability to use Navigator. Note: The navigator used in this is predated, and only used to demonstrate navigation ability based off of a tutorial I was working with.





If looking to test component 6, change the App.js code to:

import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class myapp extends Component{
    renderScene(route, navigator){
        switch(route.id){
            case 'component5':
                return (<Component5 navigator={navigator} title="component5" />)
            case 'component6':
                return (<Component6 user={route.user} navigator={navigator} title="component6" />)
        }
    }

render(){
    return(
        <Navigator 
            initialRoute={{id: 'component5'}}
            renderScene={this.renderScene}
            configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        />
    );
}
}

AppRegistry.registerComponent('myapp', () => myapp);
