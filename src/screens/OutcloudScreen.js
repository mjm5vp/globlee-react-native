import React, { Component } from 'react';
import { ScrollView, View, Text, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Icon, Card } from 'react-native-elements'
import DATA from '../data/OutcloudData'


class OutcloudScreen extends Component {
  state = { data: DATA }

  static navigationOptions = {
    title: 'OutCloud',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='cloud-upload' size={30} color={tintColor} />
    }
  }

  onProfilePress = () => {
    this.props.navigation.navigate('profile');
  };

  renderOutcloud = () => {
    const { id, text, uri } = this.state.data

    return this.state.data.map((item, i) => {
      return (
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri }}
        />
      );
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.profileHeader}>
          <TouchableWithoutFeedback onPress={() => this.onProfilePress()}>
            <View style={styles.headerImage}>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.listStyle}>
          {this.renderOutcloud()}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  profileHeader: {
    flex: 1,
    height: 100,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerImage: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: 'black',
  },
  listStyle: {
    flex: 1
  }
};

export default OutcloudScreen;
