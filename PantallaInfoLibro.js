import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaInfoLibro extends Component {
  static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const SolicitaPrest1= () => {
      console.log("Solicitando prestamo")
      //this.props.navigation.navigate("Pantallalogin")
    }

    const SolicitaPrest2= () => {
      console.log("Libro ocupado.")
      //this.props.navigation.navigate("Pantallalogin")
    }

    return (
      <View>
        <Text> PantallaInfoLibro </Text>
        <Button title= 'Solicita prestamo' onPress = {SolicitaPrest1} color="black"></Button>
        <Button title= 'Solicita prestamo 2' onPress = {SolicitaPrest2} color="black"></Button>
      </View>
    );
  }
}
