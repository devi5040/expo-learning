import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    return (
        <Button title='Click me' onPress={ () => { alert( 'Button Clicked' ) } } /> )
}

export default ButtonComponent

const styles = StyleSheet.create( {} )