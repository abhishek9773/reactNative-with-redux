import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';

export default function ProductScreen({navigation}) {
  return (
    <View style={styles.component}>
      <Text>productScreen</Text>
      <Button
        title="go to detail"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
