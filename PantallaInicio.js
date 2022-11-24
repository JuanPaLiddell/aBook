import React, { Component } from 'react'
import { View, Text,Button,StyleSheet, Image, TextInput, Alert, Route } from 'react-native';
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
    const navigation = this.context

    //Programacion de los botones
    const btnBuscar = () => {
      console.log("ID DEL USUARIO LOGEADO: ", this.props.route.params.idLOGED)
      console.log("NOMBRE DEL USUARIO LOGEADO: ", this.props.route.params.logedNAME)
      let idLOGED = this.props.route.params.idLOGED;
      let logedNAME = this.props.route.params.logedNAME;
      if(this.state.titulo===""){
        Alert.alert(
          "Error",
          "Ingresa el titulo de algun libro para poder hacer a busqueda.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );

      }
      else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log("BUSCANDO LIBRO")
                //console.log(xhttp.responseText);
                if(xhttp.responseText==="NO HAY DATOS"){
                  console.log("LIBRO NO ENCONTRADO")
                  Alert.alert(
                    "error",
                    "No se encontro el libro.",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                  );
                }
                else{
                  let recibe = xhttp.responseText;
                  let datos = recibe.split("|");
                  
                  console.log(datos[0]," ",datos[1]," ",datos[2]," ",datos[3]," ",datos[4]," ",datos[5])
                  navigation.navigate("PantallaInfoLibro", {idLOGED: idLOGED, logedNAME:logedNAME, id_libro: datos[0], isbn: datos[1], titulo: datos[2], autor: datos[3], edit: datos[4], descrip: datos[5], dispo: datos[6]})
                }
            
            }
        };
        xhttp.open("GET", "https://jpswebsite.000webhostapp.com/aBook/getLibro.php?tittle="+this.state.titulo, true);
        xhttp.send();
        
      }
    }

    return (
      <View style = {styles.ScreenContainer}>
      <View style = {styles.headerContainer}>
      <Text style = {styles.TextoEncabezado}>
        Bienvenido {this.props.route.params.logedNAME} 
        </Text>
          <Image style = {styles.userIcon} source={require('./imagenes/userICON.png')} />
      </View>

        <TextInput style = {styles.inputs} 
          placeholder = {'Ingresa el titulo de un libro'} 
          onChangeText={titulo => this.setState({titulo})}>
        </TextInput>

          <View style={styles.buttonS}>
            <Button title='Buscar' onPress = {btnBuscar} color="black"></Button>
          </View>

          <View style={styles.pieDePagina}>
            <Text style = {styles.TextoEncabezado}>
              Historial de libros pedidos:
            </Text>
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
  alignItems: 'center'
},

headerContainer:{
  flex: .20,
  flexDirection: 'row',
  backgroundColor: '#7242A4',
  alignItems: 'center',
},

TextoEncabezado:{
marginLeft: 20,
fontFamily: 'arial',
fontSize: 25,
flex:1.5,
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
      flex:.5,
      width: 80,
      height: 90,
      resizeMode: 'contain',
      alignContent: 'flex-end',
      marginRight: 2,
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
  flex: .75,
  flexDirection: 'row',
  backgroundColor: '#7242A4',
  width: 350,
  height: 30,
  },

});