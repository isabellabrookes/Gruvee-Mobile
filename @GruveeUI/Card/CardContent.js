import React from 'react'
import Typography from '../Typography'

import styles from './Card.styles'

const CardContent = ({ style, children, ...rest }) => {
    return (
        <Typography color="white" style={[styles.content, style]} {...rest}>
            {children}
        </Typography>
    )
}

export default CardContent
