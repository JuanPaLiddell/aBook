import React, { Component } from 'react'
import { View, Text,Button,StyleSheet, Image, TextInput } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaInicio extends Component {
  static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
        //Declaracion de variables:
        titulo:"",
    };
  }

  render() {
    //Programacion de los botones
    const btnBuscar = () => {
      console.log("Pantalla para buscar libros")
      this.props.navigation.navigate("PantallaInfoLibro")
    }



    return (
      <View style = {styles.ScreenContainer}>
      <View style = {styles.headerContainer}>
      <Text style = {styles.TextoEncabezado}>
        Bienvenido Usuario 
        </Text>
          <Image style = {styles.userIcon} source={require('./imagenes/userICON.png')} />
      </View>

        <TextInput style = {styles.inputs} 
          placeholder = {'Ingresa el titulo de un libro'} 
          onChangeText={titulo => this.setState({titulo})}>
        </TextInput>

          <View style={styles.buttonS}>
            <Button title='Entrar' onPress = {btnBuscar} color="black"></Button>
          </View>

          <View style={styles.pieDePagina}>

          </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
ScreenContainer: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: '#7268D9',
},

headerContainer:{
  flex: .15,
  flexDirection: 'row',
  backgroundColor: '#7242A4',
  alignItems: 'center',
},

TextoEncabezado:{
fontFamily: 'arial',
fontSize: 25,
},

buttonS:{
    alignSelf: 'center',
    width: 90,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 0,
},

userIcon:{
      width: 80,
      height: 90,
      resizeMode: 'contain',
      alignContent: 'flex-end',
      marginLeft: 100,
},

inputs:{
  alignSelf: 'center',
  backgroundColor: '#A0ADC7',
  borderWidth: 2,
  height: 50,
  width: 350,
  fontSize: 25,
  marginTop: 20,
  textAlign: 'center',
  },

  pieDePagina:{
    flex: .20,
  flexDirection: 'row',
  backgroundColor: '#7242A4',
  //alignSelf: 'center',
  },

});