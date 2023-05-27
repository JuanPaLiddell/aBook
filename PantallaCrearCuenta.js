import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { validateSQLInyection } from './validateSQLInyection';

export default class PantallaCrearCuenta extends Component {
    static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
        nombre_completo:"",
        nombre_usuario:"",
        Contraseña:"",
        email:"",
        telefono:"",
    };
  }

  render() {
    const navigation = this.context
//PROGRAMACION DEL BOTON PARA ENVIAR LA INFO DEL USUARIO A LA DB  
    const EnviarInfAccount = () => {
        console.log("INFORMACION ENVIADA PARA EL REGISTRO EN LA DB")
        if(this.state.nombre_completo==="" || this.state.nombre_usuario==="" || this.state.Contraseña==="" || this.state.email==="" || this.state.telefono===""){
            console.log("ALGUN ESPACIO ESTA VACIO")
            Alert.alert(
              "Error",
              "Algun campo esta vacio, por favor llena todos los campos.",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
        }else{
          if(!validateSQLInyection([this.state.nombre_completo, this.state.nombre_usuario, this.state.Contraseña,this.state.email,this.state.telefono])){
            console.log("Inyeccion Sql")
                    Alert.alert(
                      "error",
                      "Inyeccion SQL",
                      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                      );
            return;
          }
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                //console.log("EVIANDO DATOS DE NUEVA CUENTA")
                  console.log(xhttp.responseText);
                    navigation.navigate("Pantallalogin")
              }
          };
          xhttp.open("GET", "https://jpswebsite.000webhostapp.com/aBook/crearCuenta.php?name="+this.state.nombre_completo+"&username="+this.state.nombre_usuario+"&passwd="+this.state.Contraseña+"&email="+this.state.email+"&phoneNum="+this.state.telefono, true);
          xhttp.send();
        }
      }


    return (
      <View style = {styles.containerPrincipal}>
        <Text style = {styles.textTittle}>
            Ingresa los datos solicitados para dar de alta tu cuenta  
        </Text>

        <Text style = {styles.textindicators}>
        Nombre completo:
        </Text>
        <TextInput style = {styles.inputs} 
        onChangeText={nombre_completo => this.setState({nombre_completo})}>
        </TextInput>

        <Text style = {styles.textindicators}>
        Nombre de Usuario:
        </Text>
        <TextInput style = {styles.inputs} 
        onChangeText={nombre_usuario => this.setState({nombre_usuario})}>
        </TextInput>

        <Text style = {styles.textindicators}>
        Contraseña:
        </Text>
        <TextInput style = {styles.inputs} 
        secureTextEntry = {true}
        onChangeText={Contraseña => this.setState({Contraseña})}>
        </TextInput>

        <Text style = {styles.textindicators}>
        Correo electronico:
        </Text>
        <TextInput style = {styles.inputs} 
        onChangeText={email => this.setState({email})}>
        </TextInput>

        <Text style = {styles.textindicators}>
        telefono:
        </Text>
        <TextInput style = {styles.inputs} 
        onChangeText={telefono => this.setState({telefono})}>
        </TextInput>


        <View style = {styles.buttonSendInfo}>
            <Button title='Enviar informacion' onPress = {EnviarInfAccount} color="#7242A4"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerPrincipal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4367BB',
    },

    textTittle: {
    fontFamily: 'times new roman',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#232150',
    marginTop: 15 ,
    marginBottom: 40,
    },

    buttonSendInfo:{
    width: 130,
    height: 50,
    marginLeft: 30,
    marginTop: 10,
    },

    inputs:{
    backgroundColor: '#A0ADC7',
    borderColor: '#7242A4',
    borderWidth: 2,
    height: 50,
    width: 350,
    fontSize: 25,
    marginTop: 5,
    },

    textindicators:{
        fontFamily: 'arial',
        fontSize: 20,
        color: 'black',
        marginLeft: 30,
        alignSelf: 'flex-start',
        marginBottom: 0,
    }

});
