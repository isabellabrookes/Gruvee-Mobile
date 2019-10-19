import React from 'react'
import Typography from '../Typography'

const CardContent = ({ style, children, ...rest }) => {
    const CardContentStyles = {
        fontSize: 14,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
    }
    return (
        <Typography color="white" style={[CardContentStyles, style]} {...rest}>
            {children}
        </Typography>
    )
}

export default CardContent
