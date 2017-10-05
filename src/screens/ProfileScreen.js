import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'


class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='home' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
