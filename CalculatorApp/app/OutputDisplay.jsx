import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const OutputDisplay = () => {
    const result = useSelector( state => state.calculator.output );
    const inputString = useSelector( state => state.calculator.userInput )
    return (
        <View className="h-[15%] my-10 mx-6 border border-gray-400 rounded-2xl relative">
            <Text className="absolute top-2 right-2 text-xl font-light text-gray-300 px-2">{ inputString }</Text>
            <Text className="absolute bottom-2 right-2 text-4xl font-bold text-white px-2">{ result }</Text>
        </View>
    )
}

export default OutputDisplay