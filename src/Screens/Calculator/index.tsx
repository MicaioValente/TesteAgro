import React from 'react';
import { Box, Button } from "@react-native-material/core";
import { SafeAreaView } from 'react-native-safe-area-context';
import * as S from './styles';

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <Box h={12} style={{ backgroundColor: 'lightblue' }} />
        <Button title="Click Me" style={{ alignSelf: "center", marginTop: 40 }} />
        <Box h={12} style={{ backgroundColor: 'lightblue' }} />
      </S.Container>
    </SafeAreaView>
  );
}