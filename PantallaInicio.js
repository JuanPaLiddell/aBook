import React, { Component } from 'react'
import { View, Text, StyleSheet,Image,TextInput,Button, ImageBackground} from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaInicio extends Component {
  static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
        //Declaracion de variables:
    };
  }

  render() {
    //Programacion de los botones
    const btnBuscar = () => {
      console.log("Pantalla para buscar libros")
      this.props.navigation.navigate("PantallaBuscar")
    }



    return (
      <View>
        <Text>PantallaInicio</Text>
        <Button title='Entrar' onPress = {btnBuscar} color="black"></Button>
      </View>
    )
  }
}