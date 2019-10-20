import React from 'react'
import Typography from './Typography'

import styles from './Typography.styles'

const Title = ({ style, children, ...rest }) => {
    return (
        <Typography style={[styles.title, style]} {...rest}>
            {children}
        </Typography>
    )
}
export default Title
