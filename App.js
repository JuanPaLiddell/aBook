
import React from 'react';
import type {Node} from 'react';
//IMPORTACION DE LAS INTERFACES
import Pantallalogin from './Pantallalogin';
import PantallaInicio from './PantallaInicio';
import PantallaInfoLibro from './PantallaInfoLibro';
import PantallaCrearCuenta from './PantallaCrearCuenta';
import PantallaSolictudPrestamo from './PantallaSolictudPrestamo';
import PatallaLibroOcupado from './PatallaLibroOcupado';
//PARA LA NAVEGACION ENTRE LAS INTERFACES
import { NavigationContainer } from '@react-navigation/native';
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
      <Stack.Screen name="Pantallalogin" component={Pantallalogin} options={{headerShown: false}}/>
      <Stack.Screen name="PantallaInicio" component={PantallaInicio} options={{headerShown: false}}/>
      <Stack.Screen name="PantallaInfoLibro" component={PantallaInfoLibro} options={{headerShown: false}}/>
      <Stack.Screen name="PantallaCrearCuenta" component={PantallaCrearCuenta} options={{headerShown: false}}/>
      <Stack.Screen name="PantallaSolictudPrestamo" component={PantallaSolictudPrestamo} options={{headerShown: false}}/>
      <Stack.Screen name="PatallaLibroOcupado" component={PatallaLibroOcupado} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  
  );
};

export default App;
