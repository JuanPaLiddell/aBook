import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

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
    const EnviarInfAccount = () => {
        console.log("INFORMACION ENVIADA PARA EL REGISTRO EN LA DB")
        this.props.navigation.navigate("Pantallalogin")
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
            <Button title='Enviar informacion' onPress = {EnviarInfAccount} color="#4A5598"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerPrincipal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4A7C98',
    },

    textTittle: {
    fontFamily: 'times new roman',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#674A98',
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
