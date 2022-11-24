import { Text, View, StyleSheet, Image, Button } from 'react-native'
import React, { Component } from 'react'
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaSolictudPrestamo extends Component {
    static contextType = NavigationContext
    constructor(props) {
      super(props);
      this.state = {

      };
    }
  render() {
    const volverInicio = () => {
      let idLOGED = this.props.route.params.idLOGED;
      let logedNAME = this.props.route.params.logedNAME;
      this.props.navigation.navigate("PantallaInicio",{idLOGED: idLOGED, logedNAME:logedNAME})
    }





    return (
      <View style = {styles.container}>

              <View style = {styles.header}>
                <Image style = {styles.optionsImage} source={require('./imagenes/optionICON.png')}/>
                <Text style = {styles.TituloApp}> aBook</Text>
                <Image style = {styles.optionsImage} source={require('./imagenes/userICON.png')}/>
              </View>

              <Text style = {styles.textoINSTRUCCIONES}> Recoge tu libro con tu codigo QR</Text>
              <Image style = {styles.QR} source={require('./imagenes/aBookQR.png')}/>
              <Text style = {styles.textoINSTRUCCIONES}> Recoge tu libro en los siguientes horarios:</Text>
              <Text style = {styles.textoHorarios}> Lunes a viernes: 9 AM a 7 PM</Text>
              <Text style = {styles.textoHorarios}> Sabado y domingo: 11 AM a 3 PM</Text>

              <View style ={styles.returnPage}>
                <Button title= 'Volver a la pagina de inicio' onPress = {volverInicio} color="#232150"></Button>
              </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    flex: .20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7242A4',
    alignItems: 'center'
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
      container:{
      flex : 1.70,
      flexDirection: 'column',
      backgroundColor: '#7268D9',
      alignItems: 'center',
      },
      QR:{
        flex: .6,
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginTop: 0,
        alignContent: 'flex-end',
        marginLeft: 0,
        alignSelf: 'center',
        alignContent: 'flex-start'
      },
      textoINSTRUCCIONES:{
        marginTop: 30,
        marginBottom:10,
        fontFamily: 'times new roman',
        fontSize: 25,
      },
      textoHorarios:{
        marginTop: 10,
        marginBottom:0,
        fontFamily: 'times new roman',
        fontSize: 25,
      },
      returnPage:{
        alignSelf: 'flex-end',
        width: 170,
        height: 50,
        marginLeft: 30,
        marginTop: 30,
        marginRight: 25,
      },
});