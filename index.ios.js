/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/main');

/**
* ES6 Destructuring, equivalent to :
* var AppRegistry = React.AppRegistry;
* var Stylesheet = React.Stylesheet;
* blah blah blah
*/
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

/**
* Styles
*/
var style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class githubNotetaker extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={ style.container }
        initialRoute={{
          title: 'Github notetaker',
          component: Main
        }} />
    );
  }
};


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);