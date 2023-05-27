import React, { Component, useState } from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, Alert, Route, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
export default class PantallaInicio extends Component {
  static contextType = NavigationContext
  constructor(props) {
    super(props);
    this.state = {
      //Declaracion de variables:
      search: "",
      filteredData: [],
      masterData: [],
      loading: true
    };
   
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://jpswebsite.000webhostapp.com/aBook/getLibros.php')
      .then(response => response.json())
      .then(data => {
        this.setState({ filteredData: data,masterData: data, loading: false });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    const navigation = this.context

    const setFilteredData = (data) => {
      this.state.filteredData = data;
      this.forceUpdate();
    }
    const setSearch = (data) => {
      this.state.search = data;
    }

    const searchFilter = (text) => {
      if (text) {
        const newData = this.state.masterData.filter((item) => {
          const itemData = item.titulo ? item.titulo.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredData(newData);
      } else {
        setFilteredData(this.state.masterData);

      }
      setSearch(text);
    }
    const hola = (item) => {
      let idLOGED = this.props.route.params.idLOGED;
      let logedNAME = this.props.route.params.logedNAME;
      console.log(item);
      navigation.navigate("PantallaInfoLibro", {idLOGED: idLOGED, logedNAME:logedNAME, id_libro: item.id_libro, isbn: item.isbn, titulo: item.titulo, autor: item.autor, edit: item.editorial, descrip: item.descripcion, dispo: item.libro_disp})       
    }
    const itemView = ({ item }) => {
      return (

        <Text style={styles.itemsStyles}>
          {item.id}{'. '}{item.titulo.toUpperCase()}
        </Text>
      )
    }
    const itemSeparatorView = () => {
      return (
        <View
          style={{ height: 0.5, width: '100%' }}
        />
      )
    }
    return (
      <View style={styles.ScreenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.TextoEncabezado}>
            Bienvenido {this.props.route.params.logedNAME}
          </Text>
          <Image style={styles.userIcon} source={require('./imagenes/userICON.png')} />
        </View>


        {/*<View style={styles.buttonS}>
          <Button title='Buscar' onPress={btnBuscar} color="black"></Button>
    </View>*/}
        <SafeAreaView style={{ flex: 1 }}>
          <View >
            <TextInput style={styles.inputs}
              placeholder={'Ingresa el titulo de un libro'}
              onChangeText={(text) => searchFilter(text)}>
            </TextInput>
            <View style={styles.flatList}>
              <FlatList
                data={this.state.filteredData}
                keyExtractor={(key, index) => index.toString()}
                ItemSeparatorComponent={itemSeparatorView}
                renderItem={({ item, index, separators }) => (
                  <TouchableHighlight
                    key={item.key}
                    onPress={() => { hola(item) }}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={{ backgroundColor: 'white' }}>
                      <Text>{item.titulo}</Text>
                    </View>
                  </TouchableHighlight>
                )}
              />
            </View>

          </View>
        </SafeAreaView>
        <View style={styles.pieDePagina}>
          <Text style={styles.TextoEncabezado}>
            Historial de libros pedidos:
          </Text>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  flatList: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderWidth: 2,
    height: 500,
    width: 350,
  },
  itemsStyles: {
    padding: 10
  },
  ScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#7268D9',
    alignItems: 'center'
  },
  headerContainer: {
    flex: .20,
    flexDirection: 'row',
    backgroundColor: '#7242A4',
    alignItems: 'center',
  },

  TextoEncabezado: {
    marginLeft: 20,
    fontFamily: 'arial',
    fontSize: 25,
    flex: 1.5,
  },

  buttonS: {
    alignSelf: 'center',
    width: 90,
    height: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 0,
  },

  userIcon: {
    flex: .5,
    width: 80,
    height: 90,
    resizeMode: 'contain',
    alignContent: 'flex-end',
    marginRight: 2,
  },

  inputs: {
    alignSelf: 'center',
    backgroundColor: '#A0ADC7',
    borderWidth: 2,
    height: 50,
    width: 350,
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
  },

  pieDePagina: {
    flex: .75,
    flexDirection: 'row',
    backgroundColor: '#7242A4',
    width: 350,
    height: 20,
  },

});