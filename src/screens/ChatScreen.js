import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'


class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='chat' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>ChatScreen</Text>
        <Text>ChatScreen</Text>
        <Text>ChatScreen</Text>
        <Text>ChatScreen</Text>
        <Text>ChatScreen</Text>
        <Text>ChatScreen</Text>
      </View>
    );
  }
}

export default ChatScreen;
