import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const ButtonsLayout = () => {
    return (
        <View className="flex flex-row flex-wrap justify-between mx-10">
            <Button title='AC' btnColor='text-btn-green' />
            <Button title='%' btnColor='text-btn-green' />
            <Button title='/' btnColor='text-btn-green' />
            <Button title='!' btnColor='text-btn-red' />
            <Button title='7' btnColor='text-gray-300' />
            <Button title='8' btnColor='text-gray-300' />
            <Button title='9' btnColor='text-gray-300' />
            <Button title='*' btnColor='text-btn-red' />
            <Button title='4' btnColor='text-gray-300' />
            <Button title='5' btnColor='text-gray-300' />
            <Button title='6' btnColor='text-gray-300' />
            <Button title='-' btnColor='text-btn-red' />
            <Button title='1' btnColor='text-gray-300' />
            <Button title='2' btnColor='text-gray-300' />
            <Button title='3' btnColor='text-gray-300' />
            <Button title='+' btnColor='text-btn-red' />
            <Button title='R' btnColor='text-btn-green' />
            <Button title='0' btnColor='text-gray-300' />
            <Button title='.' btnColor='text-gray-300' />
            <Button title='=' btnColor='text-btn-red' />
        </View>
    )
}

export default ButtonsLayout