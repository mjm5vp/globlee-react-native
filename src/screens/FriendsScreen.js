import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';


class FriendsScreen extends Component {
  static navigationOptions = {
    title: 'Friends',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='people-outline' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>FriendsScreen</Text>
        <Text>FriendsScreen</Text>
        <Text>FriendsScreen</Text>
        <Text>FriendsScreen</Text>
        <Text>FriendsScreen</Text>
        <Text>FriendsScreen</Text>
      </View>
    );
  }
}

export default FriendsScreen;
