import React from 'react';
import { View, StyleSheet } from 'react-native';
import FutsalMatch from './src/screens/FutsalMatch';

const App = () => {
  return (
    <View style={styles.container}>
      <FutsalMatch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FA',
  },
});

export default App;
