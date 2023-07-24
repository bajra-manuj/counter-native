import {useEffect} from 'react';
import {Text, View} from 'react-native';

type TimerProps = {
  count: Number;
  incCount: () => void;
};
export default function Timer({count, incCount}: TimerProps) {
  useEffect(() => {
    const id = setInterval(() => {
      incCount();
    }, 1000);
    // return clearInterval(id);
  }, []);
  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
}
