import React from 'react'
import { Image } from 'react-native'
import Button from './Button'

import styles from './IconButton.styles'

const IconButton = ({ icon, style, children, ...rest }) => {
    return (
        <Button style={[styles.wrapper, style]} {...rest}>
            <Image source={icon} style={styles.image} />
        </Button>
    )
}

export default IconButton
