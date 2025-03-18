import { View, Text } from 'react-native'
import React from 'react'
import OutputDisplay from './OutputDisplay'
import ButtonsLayout from './ButtonsLayout'

const CalculatorLayout = () => {
    return (
        <View className="my-24 border border-gray-300 h-[90%] rounded-2xl drop-shadow-lg shadow-white">
            <OutputDisplay />
            <ButtonsLayout />
        </View>
    )
}

export default CalculatorLayout