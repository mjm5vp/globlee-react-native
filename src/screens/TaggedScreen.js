import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'


class TaggedScreen extends Component {
  static navigationOptions = {
    title: 'Tagged',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='label' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>TaggedScreen</Text>
        <Text>TaggedScreen</Text>
        <Text>TaggedScreen</Text>
        <Text>TaggedScreen</Text>
        <Text>TaggedScreen</Text>
        <Text>TaggedScreen</Text>
      </View>
    );
  }
}

export default TaggedScreen;
