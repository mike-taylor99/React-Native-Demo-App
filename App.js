import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import Component1 from './app/components/Component1/Component1';
import Component2 from './app/components/Component2/Component2';
import Component3 from './app/components/Component3/Component3';
import Component4 from './app/components/Component4/Component4';
import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';

export default class myapp extends Component{
  render(){
    return(
      <View>
        <Text>   </Text>
        <Text>   </Text>
        <Text></Text>
        <Component5 />
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);