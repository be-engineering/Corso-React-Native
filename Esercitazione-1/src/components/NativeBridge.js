import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button, Alert,FlatList
} from 'react-native';
import {
  shareBy, openWebUrl, openMail, openPhoneNumber,
} from '../utils/nativeApiUtils';

class NativeBridge extends Component {
  render() {
    const user = {
      name: '',
      lastname: '',
    };

    const test = user.name;
    return (
      <View style={styles.container}>
        <Button
          title="share"
          onPress={() => shareBy('Invio dall app del corso di  rewct native', 'Corso React Native').then((result) => {
          })
                }
        />
        <Button
          title="open web url"
          onPress={() => openWebUrl('https://www.google.com')
                }
        />
        <Button
          title="open mail"
          onPress={() => openMail('c.chiama@icloud.com', 'soggetto', 'corpo della mail', () => Alert.alert('Errore'))
                }
        />
        <Button
          title="open phone"
          onPress={() => openPhoneNumber('3339042228')
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default NativeBridge;
