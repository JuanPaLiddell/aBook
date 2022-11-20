import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaBuscar extends Component {
    static contextType = NavigationContext
  render() {
//programacion de los botones
const btnBusqueda = () => {
    console.log("Pantalla que despliega la informacion del libro")
    this.props.navigation.navigate("PantallaInfoLibro")
  }



    return (
      <View>
        <Text>PantallaBuscar</Text>
        <Button title='Buscar informacion del libro' onPress = {btnBusqueda} color="black"></Button>
      </View>
    )
  }
}