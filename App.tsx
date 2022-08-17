import React from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from './src/styles/Colors';
import Calculator from './src/Screens/Calculator'
export default function App() {

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: 'black' }]}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});