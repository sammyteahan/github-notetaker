var React = require('react-native');
var api = require('../utils/api');
var Dashboard = require('./dashboard');

/**
* ES6 Destructuring
*/
var {
 View,
 Text,
 StyleSheet,
 TextInput,
 TouchableHighlight,
 ActivityIndicatorIOS
} = React;

/**
* Style
*/
var style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

/**
* Component
*/
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }
  handleSubmit() {
    this.setState({
      isLoading: true
    });
    api.getBio(this.state.username)
      .then((response) => { // es6 shorthand for typical function(response) {...}
        if(response.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          })
        }
        else {
          // push a new component onto navigator and pass info
          this.props.navigator.push({
            title: response.name || 'Select an option',
            component: Dashboard,
            passProps: {userInfo: response}
          });
          // reset the state if we hit 'back' button:
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          })
        }
      });
  }
  render() {
    var showError = (
      this.state.error ? <Text>{ this.state.error }</Text> : <View></View>
    );
    return (
      <View style={ style.mainContainer }>
        <Text style={ style.title }>Search for a GitHub user</Text>
        <TextInput 
          style={ style.searchInput } 
          value={ this.state.username } 
          onChange={ this.handleChange.bind(this) } />
        <TouchableHighlight 
          style={ style.button } 
          onPress={ this.handleSubmit.bind(this) } 
          underlayColor='white'>
            <Text style={ style.buttonText }>Search</Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={ this.state.isLoading }
          color='#111'
          size='large'></ActivityIndicatorIOS>
        { showError }
      </View>
    )
  }
}

module.exports = Main;