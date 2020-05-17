import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text>LOST</Text>
      </View>
    )
  }
}
