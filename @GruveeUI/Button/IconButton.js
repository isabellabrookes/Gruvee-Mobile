import React from 'react'
import { Image } from 'react-native'
import Button from './Button'

const IconButton = ({ icon, style, children, ...rest }) => {
    const IconButtonStyle = {
        wrapper: {
            height: 60,
            width: 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            height: '100%',
            width: '100%',
        },
    }
    return (
        <Button style={[IconButtonStyle.wrapper, style]} {...rest}>
            <Image source={icon} style={IconButtonStyle.image} />
        </Button>
    )
}

export default IconButton
