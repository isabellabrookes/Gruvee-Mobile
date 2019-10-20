import React from 'react'
import Typography from '../Typography'

import styles from './Card.styles'

const CardTitle = ({ style, children, ...rest }) => {
    return (
        <Typography
            color="white"
            weight="semi-bold"
            style={[styles.title, style]}
            {...rest}
        >
            {children}
        </Typography>
    )
}

export default CardTitle
