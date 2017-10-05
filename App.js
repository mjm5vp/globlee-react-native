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

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    const MainNavigator = TabNavigator({
      camera: { screen: CameraScreen },
      outcloud: { screen: OutcloudScreen },
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
