import React from 'react'
import { View } from 'react-native'
import color from '../colors'

const Card = ({ light, opacity, style, children }) => {
    let backgroundColor = color.background.card
    if (light) backgroundColor = '#2E282A'
    const CardStyles = {
        width: '100%',
        backgroundColor,
        borderRadius: 11,
        opacity: opacity || 1,
    }
    return <View style={[CardStyles, style]}>{children}</View>
}

export default Card
