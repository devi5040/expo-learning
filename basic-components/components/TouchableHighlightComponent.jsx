import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const TouchableHighlightComponent = () => {
    return (
        <TouchableHighlight onPress={ () => { alert( 'highlight btn clicked' ) } } underlayColor='grey' style={ { margin: 10, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#000', borderRadius: 15 } }>
            <Text style={ { color: '#fff' } }>Click This !!</Text>
        </TouchableHighlight>
    )
}

export default TouchableHighlightComponent
