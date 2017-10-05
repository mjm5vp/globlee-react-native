import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'


class OutcloudScreen extends Component {
  static navigationOptions = {
    title: 'OutCloud',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='cloud-upload' size={30} color={tintColor} />
    }
  }

  render() {
    return (
      <View>
        <Text>OutcloudScreen</Text>
        <Text>OutcloudScreen</Text>
        <Text>OutcloudScreen</Text>
        <Text>OutcloudScreen</Text>
        <Text>OutcloudScreen</Text>
        <Text>OutcloudScreen</Text>
      </View>
    );
  }
}

export default OutcloudScreen;
