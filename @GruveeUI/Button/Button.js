import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './Button.styles'

const Button = ({ style, children, ...rest }) => {
    return (
        <TouchableOpacity {...rest} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    )
}

export default Button
