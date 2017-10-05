import { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
// import { Provider } from 'react-redux';

// import registerForNotifications from './services/push_notifications';
// import store from './store';
import CameraScreen from './src/screens/CameraScreen';
import IncloudScreen from './src/screens/IncloudScreen';
import OutcloudScreen from './src/screens/OutcloudScreen';
import ProfileScreen from './src/screens/ProfileScreen'

import ChatScreen from './src/screens/ChatScreen'
import FriendsScreen from './src/screens/FriendsScreen'
import TaggedScreen from './src/screens/TaggedScreen'

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const MainNavigator = TabNavigator({
      camera: { screen: CameraScreen },
      outcloud: {
        screen: StackNavigator({
          main: { screen: OutcloudScreen },
          profile: {
            screen: TabNavigator({
              profileHome: { screen: ProfileScreen },
              friends: { screen: FriendsScreen },
              chat: {screen: ChatScreen },
              tagged: {screen: TaggedScreen }
            }, {
              navigationOptions: {
                tabBarVisible: true
              }}
            )
          }
        })
      },
      incloud: { screen: IncloudScreen }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      swipeEnabled: true,
      lazy: true
    });

    return (
      // <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
});
