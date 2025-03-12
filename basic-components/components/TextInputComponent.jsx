import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputComponent = () => {
    return (
        <TextInput placeholder='Enter text' style={ { borderColor: '#fff', borderWidth: 1, margin: 20, borderRadius: 10, paddingHorizontal: 10 } } />
    )
}

export default TextInputComponent

const styles = StyleSheet.create( {} )