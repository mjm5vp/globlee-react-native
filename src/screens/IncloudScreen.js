import React, { Component } from 'react';
import { View, Text, AsyncStorage, ScrollView } from 'react-native';
import { Icon, Card, CardSection, Button } from 'react-native-elements';
import DATA from '../data/IncloudData';


class IncloudScreen extends Component {
  state = { data: DATA }

  static navigationOptions = {
    title: 'InCloud',
    tabBarIcon: ({ tintColor }) => {
        return <Icon name='cloud-download' size={30} color={tintColor} />
    }
  }

  handleEndorse = () => {
    console.log('endorse')
  }

  renderIncloud = () => {
    const { id, text, uri, price } = this.state.data

    return this.state.data.map((item, i) => {
      return (
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri }}
        >
          <View style={styles.viewStyle}>
            <Text>
              {item.price}
            </Text>
            <Button
              title='Endose'
              onPress={() => this.handleEndorse()}
              large={false}
              icon={{name: 'attach-money'}}
              backgroundColor='green'
              fontSize={10}
              style={styles.buttonStyle}
            />
          </View>

        </Card>
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderIncloud()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50
  },
  buttonStyle: {
    width: 100,
    height: 20,
    borderRadius: 20
  }
}

export default IncloudScreen;
