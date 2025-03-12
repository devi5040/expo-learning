import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextComponent = () => {
    return (
        <Text style={ styles.textStyle }>TextComponent</Text>
    )
}

export default TextComponent

const styles = StyleSheet.create( {
    textStyle: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'semibold'
    }
} )