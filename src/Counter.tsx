import {useState} from 'react';
import {View} from 'react-native';
import InnerCounter from './InnerCounter';
import Timer from './Timer';

export default function Counter() {
  const [count, setCount] = useState(0);
  const incCount = () => setCount(oldCount => oldCount + 1);
  const decCount = () => setCount(oldCount => oldCount - 1);
  return (
    <View>
      {/* <InnerCounter decCount={decCount} incCount={incCount} count={count} /> */}
      <Timer incCount={incCount} count={count} />
    </View>
  );
}
