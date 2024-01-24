import {View, Text, Button} from 'react-native';
import React from 'react';

export default function Settings({navigation}) {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title={'go to home'}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
