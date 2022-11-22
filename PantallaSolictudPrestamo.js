import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContext, useNavigation } from '@react-navigation/native';

export default class PantallaSolictudPrestamo extends Component {
    static contextType = NavigationContext
  render() {
    return (
      <View>
        <Text>PantallaSolictudPrestamo</Text>
      </View>
    )
  }
}