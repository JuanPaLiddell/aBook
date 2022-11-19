import { View, Text, Button} from 'react-native'
import React from 'react'
import { NavigationContext, useNavigation } from '@react-navigation/native';

const Pantallx = () => {
   const navigation = React.useContext(NavigationContext);
  return (
    <View>
      <Text>Pantallx</Text>
      <Button onPress = {() => navigation.navigate('PantallaNueva')} title='Entrar' color="black"></Button>
    </View>
  )
}

export default Pantallx
