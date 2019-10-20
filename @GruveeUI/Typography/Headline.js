import React from 'react'
import Typography from './Typography'

import styles from './Typography.styles'

const Headline = ({ style, children, ...rest }) => {
    return (
        <Typography
            weight="semibold"
            style={[styles.headline, style]}
            {...rest}
        >
            {children}
        </Typography>
    )
}
export default Headline
