import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Appbar, List, TouchableRipple } from 'react-native-paper';
import socketio from 'socket.io-client';
console.ignoredYellowBox = ['Remote debugger'];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
import Theme from './Theme';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registers: [
        { temperature: 25.4, humidity: 40, date: new Date() },
        { temperature: 25.3, humidity: 39, date: new Date() }
      ]
    }
    this.socket = socketio('heroku url', {transports: ['websocket']});
  }

  componentDidMount() {
    this.handleSocketIncoming();
  }

  handleSocketIncoming = () => {
    this.socket.on('data', items => {
      this.setState({
        registers
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header theme={Theme}>
          <Appbar.Content
            title="Akbal"
            subtitle="Environmental control"
          />
        </Appbar.Header>
        <View style={styles.body}>
          
        </View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.fade
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
    padding: 5
  }
});

Expo.registerRootComponent(App);