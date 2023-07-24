import {Button, Text, View} from 'react-native';

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
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase Count" onPress={incCount} />
      <Button title="Decrease Count" onPress={decCount} />
    </View>
  );
}
