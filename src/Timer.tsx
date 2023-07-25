import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.timer}>Timer: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    color: 'black',
    fontSize: 45,
  },
});
