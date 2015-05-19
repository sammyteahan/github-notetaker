var React = require('react-native');

var {
  Text,
  View,
  Image,
  StyleSheet
} = React;

var style = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5
  },
  handle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  },
  image: {
    alignSelf: 'center',
    borderRadius: 65,
    height: 125,
    marginTop: 10,
    width: 125
  }
});


class Badge extends React.Component {
  render() {
    return (
      <View style={ style.container }>
        <Image source={{ uri: this.props.userInfo.avatar_url }} style={ style.image } />
        <Text style={ style.name }>{ this.props.userInfo.name }</Text>
        <Text style={ style.handle }>{ this.props.userInfo.login }</Text>
      </View>
    )
  }
}

/**
* Throw error if userInfo isn't passed down from parent.
* this is a 'pure component' in react
*/
Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

module.exports = Badge;
