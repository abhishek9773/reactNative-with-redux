import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';

export default function IinfoScreen({navigation}) {
  return (
    <View style={styles.component}>
      <Text>infoScreen</Text>
      <Button
        title="go to  home screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
