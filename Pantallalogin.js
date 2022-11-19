import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput,Button, ImageBackground} from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class Pantallalogin extends Component {
    static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
        //Declaracion de variables:
        usrName:"",
        passwd:"",
    };
  }

  render() {
      //Programacion de los botones:
      const btnClick = () => {
        console.log("CLICKEASTE EL BOTON")
        this.props.navigation.navigate("PantallaInicio")
      }

      const options = () => {
        console.log("MENU DE OPCIONES")
      }

    return (
      <View style={styles.container}> 

        <View style={styles.body}>    
        <Button title='opciones' onPress = {options} color="gray"/>
        <Text style={styles.TituloApp}> 
        aBook 
        </Text>
        <Image style = {styles.icono} source={require('./imagenes/icono.png')} />    
        </View>                   

        <View style={styles.header}>
        <TextInput style={styles.inputUser}
        placeholder = {'Nombre de Usuario'} 
        onChangeText={usrName => this.setState({usrName})}>
        </TextInput>

        <TextInput style={styles.inputPasswd}
        placeholder = {'Contraseña'} 
        secureTextEntry = {true} 
        onChangeText={passwd => this.setState({passwd})}>
        </TextInput>

        <View style = {styles.loginButton}>
        <Button title='Entrar' onPress = {btnClick} color="gray"></Button>
        </View>

        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
TituloApp:{
fontFamily: 'times new roman',
marginLeft: 70,
fontSize: 40,
color: 'white',
marginTop: 15 ,
},

container:{
flex : 1,
flexDirection: 'column',
},

body:{
  flex: .9,
  flexDirection: 'row',
  alignItems: 'flex-start',
  backgroundColor: 'purple',
  },

  header:{
    alignItems: 'center',
    flex:6,
    backgroundColor: 'blue',
    },

    inputUser: {
      backgroundColor: 'white',
      textAlign: 'left',
      borderWidth: 2,
      width: 300,
      fontSize: 25,
      marginTop: 100,
    },

    inputPasswd: {
      backgroundColor: 'white',
      textAlign: 'left',
      borderWidth: 2,
      width: 300,
      fontSize: 25,
      marginTop: 10,
    },

    loginButton: {
        width: 100,
        height: 50,
       // borderWidth: 1,
        marginLeft: 30,
        marginTop: 10,
    },

    icono: {
      width: 90,
      height: 100,
      resizeMode: 'contain',
      marginLeft: 50,
      marginTop: -15,
  },

  optionButton: {
    width: 25,
    height: 25,
    marginLeft: 30,
    marginTop: 10,
  }

});

