import React from 'react'
import { View } from 'react-native'

import styles from './Card.styles'

const Card = ({ style, children, ...rest }) => {
    return (
        <View style={[styles.card, style]} {...rest}>
            {children}
        </View>
    )
}

export default Card
