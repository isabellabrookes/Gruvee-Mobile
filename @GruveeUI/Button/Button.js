import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ style, children, ...rest }) => {
    const ButtonStyle = {
        borderRadius: 50,
        display: 'flex',
        flexBasis: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }
    return (
        <TouchableOpacity {...rest} style={[ButtonStyle, style]}>
            {children}
        </TouchableOpacity>
    )
}

export default Button
