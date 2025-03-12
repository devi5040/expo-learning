import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TouchabilityOpacityComponent = () => {
    return (
        <TouchableOpacity onPress={ () => { alert( 'Button Clicked' ) } } style={ { margin: 10, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'red' } }>
            <Text>Click Me!</Text>
        </TouchableOpacity>
    )
}

export default TouchabilityOpacityComponent

const styles = StyleSheet.create( {} )