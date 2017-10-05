import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'


class IncloudScreen extends Component {
  static navigationOptions = {
    title: 'InCloud',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='cloud-download' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>IncloudScreen</Text>
        <Text>IncloudScreen</Text>
        <Text>IncloudScreen</Text>
        <Text>IncloudScreen</Text>
        <Text>IncloudScreen</Text>
        <Text>IncloudScreen</Text>
      </View>
    );
  }
}

export default IncloudScreen;
