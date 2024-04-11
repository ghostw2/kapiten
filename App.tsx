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
import Test from './components/Test'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

function App(): React.JSX.Element {

  return (

            <NavigationContainer>

              <StackNavigator />
            </NavigationContainer>

        );
    }
export default App;
