import React from 'react'
import { View } from 'react-native'

const Card = ({ light, opacity, style, children }) => {
    let backgroundColor = '#1B1819'
    if (light) backgroundColor = '#2E282A'
    const cardStyles = {
        width: '100%',
        backgroundColor,
        borderRadius: 11,
        opacity: opacity || 1,
    }
    return <View style={[cardStyles, style]}>{children}</View>
}

export default Card
