import {Button, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../Redux/StoreSlice/slice1';

export default function HomeScreen({navigation}) {
  const data = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.component}>
      <Text>here is the real data {data}</Text>
      <Button
        title="add the value of 1"
        onPress={() => dispatch(increment())}
      />
      <Button title="remove of 1" onPress={() => dispatch(decrement())} />
      <Button
        title="add with 5 "
        onPress={() => dispatch(incrementByAmount())}
      />
    </View>
  );
}
