var React = require('react-native');
var Profile = require('./profile');
var Repositories = require('./repositories');
var api = require('../utils/api');
var Notes = require('./notes');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var style = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 300,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component {
  
  // Function to dynamically apply background color
  makeBackground(btn) {

    var styleObj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0) {
      styleObj.backgroundColor = '#48BBEC';
    } else if(btn === 1) {
      styleObj.backgroundColor = '#E77AAE';
    } else if(btn === 2) {
      styleObj.backgroundColor = '#758BF4';
    }

    return styleObj;
  }

  goToProfile() {
    this.props.navigator.push({
      component: Profile,
      title: 'Profile Page',
      passProps: {userInfo: this.props.userInfo}
    });
  }
  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((response) => {
        this.props.navigator.push({
          component: Repositories,
          title: 'Repositories',
          passProps: {
            userInfo: this.props.userInfo, 
            repos: response
          }
        });
      });
  }
  goToNotes() {
    api.getNotes(this.props.userInfo.login)
      .then((jsonResponse) => {
        jsonResponse = jsonResponse || {}; //return empty object if we don't have notes
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            notes: jsonResponse,
            userInfo: this.props.userInfo
          }
        });
      });
  }
  render() {
    return (
      <View style={ style.container }>
        <Image source={{ uri: this.props.userInfo.avatar_url }} style={ style.image } />
        <TouchableHighlight
          style={ this.makeBackground(0) }
          onPress={ this.goToProfile.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={ this.makeBackground(1) }
          onPress={ this.goToRepos.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={ this.makeBackground(2) }
          onPress={ this.goToNotes.bind(this) }
          underlayColor='#88D4F5'>
            <Text style={ style.buttonText }>View Notes</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Dashboard;