import { View, Text } from 'react-native'
import React from 'react'

const AppLayout = ( { children } ) => {
    return (
        <View className="h-screen w-full px-10 py-32 border bg-primary">
            { children }
        </View>
    )
}

export default AppLayout