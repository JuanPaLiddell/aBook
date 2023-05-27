import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Alert} from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { validateSQLInyection } from './validateSQLInyection';
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
    const navigation = this.context
      //Programacion de los botones:
      const btnClick = () => {
        if(!validateSQLInyection([this.state.usrName, this.state.passwd])){
          console.log("Inyeccion Sql")
                  Alert.alert(
                    "error",
                    "Inyeccion SQL",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                    );
          return;
        }
        console.log("Ingresando usuario")
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log("Ingresando usuario")
              console.log(xhttp.responseText);
              if(xhttp.responseText==="no hay datos"){
                  console.log("No es un usuario en tu DB")
                  Alert.alert(
                    "error",
                    "usuario o contraseña incorrectos",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                    );
                }
                else{
                  let recibe = xhttp.responseText;
                  let datos = recibe.split(",");
                 navigation.navigate("PantallaInicio", {idLOGED: datos[0], logedNAME: datos[1]})
                }
            
            }
        };
        xhttp.open("GET", "https://jpswebsite.000webhostapp.com/aBook/RegistroUsuarios.php?username="+this.state.usrName+"&Userpasswd="+this.state.passwd, true);
        xhttp.send();
        navigation.navigate("Pantallalogin")
      }

      const options = () => {
        console.log("MENU DE OPCIONES")
      }

      const btnCreateAccount= () => {
        console.log("CREANDO UNA NUEVA CUENTA")
        this.props.navigation.navigate("PantallaCrearCuenta")
      }

    return (
      <View style={styles.container}> 

        <View style={styles.body}>
          <View style = {styles.optionButton}>
            <Button title='opciones' onPress = {options} color="#7268D9"/>
            </View>

        <Text style={styles.TituloApp}> 
        aBook 
        </Text>
        <Image style = {styles.icono} source={require('./imagenes/icono.png')} />    
        </View>                   

        <View style={styles.header}>

          <Text style={styles.textInicioSesion}>
            Inicio de sesión
          </Text>
        
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
        <Button title='Entrar' onPress = {btnClick} color="#7268D9"></Button>
        </View>

        <Text style = {styles.textDEF}>
          ¿No tienes una cuenta aun?
        </Text>

        <View style = {styles.CreateAccountButton}>
          <Button title='Crea una cuenta' onPress = {btnCreateAccount} color="#7268D9"></Button>
        </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
textDEF:{
  fontFamily: 'arial',
  fontSize: 20,
  marginTop: 15,
  fontWeight: 'bold',
  color: '#2D4D71', 
},

textInicioSesion:{
  fontFamily: 'arial',
  fontSize: 40,
  marginTop: 100,
  marginBottom: 10,
  //fontWeight: 'bold',
  color: 'black',
},

TituloApp:{
fontFamily: 'times new roman',
marginLeft: 40, 
fontSize: 50,
color: '#A0ADC7',
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
  backgroundColor: '#7242A4',
  },

  header:{
    alignItems: 'center',
    flex:6,
    backgroundColor: '#232150',
    },

    inputUser: {
      backgroundColor: '#A0ADC7',
      textAlign: 'left',
      borderWidth: 2,
      width: 300,
      fontSize: 25,
      marginTop: 0,
    },

    inputPasswd: {
      backgroundColor: '#A0ADC7',
      textAlign: 'left',
      borderWidth: 2,
      width: 300,
      fontSize: 25,
      marginTop: 10,
    },

    loginButton: {
        width: 100,
        height: 50,
        marginLeft: 30,
        marginTop: 10,
    },

    icono: {
      width: 90,
      height: 100,
      resizeMode: 'contain',
      marginLeft: 30,
      marginTop: -15,
  },

  optionButton: {
    alignSelf: 'center',
    width: 90,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 0,
  },

  CreateAccountButton:{
    width: 150,
    height: 50,
    marginLeft: 30,
    marginTop: 10,
  }
});

