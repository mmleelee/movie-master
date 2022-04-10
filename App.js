import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, extendTheme,StatusBar } from 'native-base';
import Navigation from './src/navigation';
import CommentSection from './src/components/CommentSection';

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark"
}
const customTheme = extendTheme({config});

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#070709" />
      <NativeBaseProvider theme={customTheme}>
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
