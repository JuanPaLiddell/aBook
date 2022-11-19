
import React from 'react';
import type {Node} from 'react';
import Pantallalogin from './Pantallalogin';
import PantallaInicio from './PantallaInicio';
//import Pantallx from './pantallx';
import { NavigationContainer } from '@react-navigation/native';
import PantallaNueva from './PantallaNueva';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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


const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

  const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Pantallalogin" component={Pantallalogin} />
      <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

export default App;
