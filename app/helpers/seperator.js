var React = require('react-native');


var {
  View,
  StyleSheet
} = React;


var style = StyleSheet.create({
  seperator: {
    backgroundColor: '#E4E4E4',
    flex: 1,
    height: 1,
    marginLeft: 15
  }
});


class Seperator extends React.Component {
  render() {
    return (
      <View style={ style.seperator } />
    )
  }
};

module.exports = Seperator;