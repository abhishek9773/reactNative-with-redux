import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.component}>
      <Text>ProfileScreen</Text>
      <Button
        title={'to go home'}
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
