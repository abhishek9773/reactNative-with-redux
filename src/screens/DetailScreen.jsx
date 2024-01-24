import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function DetailScreen({navigation}) {
  return (
    <View style={styles.component}>
      <Text>DetailScreen</Text>
      <Button
        title="go to homepage"
        onPress={() => navigation.navigate('Homek')}
      />
    </View>
  );
}
