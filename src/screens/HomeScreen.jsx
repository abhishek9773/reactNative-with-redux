import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.component}>
      <Text>HomeScreen</Text>
      <Button
        title="go to login page"
        onPress={() => navigation.navigate('Product')}
      />
    </View>
  );
}
