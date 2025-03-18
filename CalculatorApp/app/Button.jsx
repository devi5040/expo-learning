import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculatorActions } from './store/calculatorSlice';

const Button = ( { title, btnColor } ) => {
    const dispatch = useDispatch();
    const userInput = useSelector( state => state.calculator.userInput )

    const clickHandler = () => {
        if ( title !== '=' )
            if ( title !== 'AC' )
                dispatch( calculatorActions.updateUserInput( title ) )
            else
                dispatch( calculatorActions.resetState() )
        else
            dispatch( calculatorActions.calculateOutput( userInput ) )
    }
    return (
        <TouchableOpacity className="px-2 py-5 rounded-lg border w-[20%] mx-1 my-2 flex justify-center items-center border-gray-500" onPress={ clickHandler }>
            <Text className={ `${ btnColor } cursor-pointer` } >{ title }</Text>
        </TouchableOpacity>
    )
}

export default Button