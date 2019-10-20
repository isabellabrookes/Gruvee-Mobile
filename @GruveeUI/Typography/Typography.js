import React from 'react'
import { Text } from 'react-native'

import styles from './Typography.styles'

const Typography = ({ color, weight, style, children, ...rest }) => {
    return (
        <Text style={[styles.default(color, weight), style]} {...rest}>
            {children}
        </Text>
    )
}

export default Typography
