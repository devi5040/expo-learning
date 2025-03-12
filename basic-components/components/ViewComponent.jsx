import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ViewComponent = ( { children } ) => {
    return (
        <View style={ styles.viewContainer }>
            { children }
        </View>
    )
}

export default ViewComponent

const styles = StyleSheet.create( {
    viewContainer: {
        height: 100,
        width: 200,
        backgroundColor: '#0a0a0a'
    }
} )