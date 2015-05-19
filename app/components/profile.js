var React = require('react-native');
var Badge = require('./badge');
var Seperator = require('../helpers/seperator');

var {
  Text,
  View,
  StyleSheet,
  ScrollView
} = React;

var style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});

class Profile extends React.Component {
  getRowTitle(user, item) {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    var userInfo = this.props.userInfo;
    var topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    var list = topicArr.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={ index } />
      }
      else {
        return (
          <View key={ index }>
            <View style={ style.rowContainer }>
              <Text style={ style.rowTitle }>{ this.getRowTitle(userInfo, item) }</Text>
              <Text style={ style.rowContent }>{ userInfo[item] }</Text>
            </View>
            <Seperator />
          </View>
        )
      }
    });
    return (
      <ScrollView style={ style.container }>
        <Badge userInfo={ this.props.userInfo } />
        { list }
      </ScrollView>
    )
  }
};

module.exports = Profile;
