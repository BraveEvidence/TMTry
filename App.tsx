/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
// import NativeYourEdgeClipboard from './js/TurboModules/YourEdgeClipboard/NativeYourEdgeClipboard';
import RTNCalculator from './RTNCalculator/js/NativeCalculator';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity
        onPress={async () => {
          console.log('Addition', await RTNCalculator?.add(4, 5));
        }}>
        <Text>Get addition</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;
