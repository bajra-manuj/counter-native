import {Button, StyleSheet, Text, View} from 'react-native';

type InnerCounterProps = {
  count: Number;
  incCount: () => void;
  decCount: () => void;
};

export default function InnerCounter({
  count,
  incCount,
  decCount,
}: InnerCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Increase Count"
          onPress={incCount}
        />
        <Button
          style={styles.button}
          title="Decrease Count"
          onPress={decCount}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  timer: {
    position: 'absolute',
    width: '100%',
    top: '45%',
    textAlign: 'center',
    color: 'black',
    fontSize: 45,
  },
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    gap: 5,
    bottom: '1%',
    padding: '2%',
  },
  button: {},
});
