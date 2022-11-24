import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaInfoLibro extends Component {
  static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const navigation = this.context
    const SolicitaPrest1= () => {
      let idLOGED = this.props.route.params.idLOGED;
      let logedNAME = this.props.route.params.logedNAME;
      console.log("Solicitando prestamo.")

      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              console.log("SOLICITANDO EL PRESTAMO")
              console.log(xhttp.responseText);
              if(xhttp.responseText==="LIBRO OCUPADO"){
                  console.log("EL LIBRO ESTA OCUPADO")
                  //console.log(this.props.route.params.dispo)
                  navigation.navigate("PatallaLibroOcupado",{idLOGED: idLOGED, logedNAME:logedNAME})
                }
                else{
                 navigation.navigate("PantallaSolictudPrestamo",{idLOGED: idLOGED, logedNAME:logedNAME})
                }
            
            }
        };
        xhttp.open("GET", "https://jpswebsite.000webhostapp.com/aBook/agregaPrestamo.php?user_id="+this.props.route.params.idLOGED+"&libro_id="+this.props.route.params.id_libro, true);
        xhttp.send();

    }

    

    return (
        <View style = {styles.container}>
              <View style = {styles.header}>
                <Image style = {styles.optionsImage} source={require('./imagenes/optionICON.png')}/>
                <Text style = {styles.TituloApp}> aBook</Text>
                <Image style = {styles.optionsImage} source={require('./imagenes/userICON.png')}/>
              </View>
          <Text style = {styles.infoPrinted}> ISBN:  {this.props.route.params.isbn} </Text>
          <Text> </Text>
          <Text style = {styles.infoPrinted}> Titulo: {this.props.route.params.titulo} </Text>
          <Text> </Text>
          <Text style = {styles.infoPrinted}> Autor: {this.props.route.params.autor} </Text>
          <Text> </Text>
          <Text style = {styles.infoPrinted}> Editorial: {this.props.route.params.edit} </Text>
          <Text> </Text>
          <Text style = {styles.infoPrinted}> Descripcion: {this.props.route.params.descrip} </Text>
        
            <View style = {styles.SolicitarBUTTON}>
              <Button title= 'Solicita prestamo' onPress = {SolicitaPrest1} color="#232150"></Button>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SolicitarBUTTON:{
      alignSelf: 'flex-end',
      width: 130,
      height: 50,
      marginLeft: 30,
      marginTop: 30,
      marginRight: 25,
    },

    infoPrinted:{
      fontFamily: 'arial',
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'nomal',
      color: '#ffffff', 
    },

    header:{
      flex: .30,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#7242A4',
      alignItems: 'center'
    },

    container:{
      flex : 1,
      flexDirection: 'column',
      backgroundColor: '#7268D9'
      },

      optionsImage:{
      flex: .5,
      width: 50,
      height: 50,
      resizeMode: 'contain',
      alignContent: 'flex-end',
      marginLeft: 0,
      alignSelf: 'center',
      alignContent: 'flex-start'
      },
      TituloApp:{
        flex: 1,
        fontFamily: 'times new roman',
        marginLeft: 0, 
        fontSize: 50,
        color: '#A0ADC7',
        marginTop: 10 ,
        marginBottom: 15,
        },

  });
