import React from 'react'
import Typography from '../Typography'

const CardContent = ({ style, children, ...rest }) => {
    const cardContentStyle = {
        fontSize: 14,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
    }
    return (
        <Typography color="white" style={[cardContentStyle, style]} {...rest}>
            {children}
        </Typography>
    )
}

export default CardContent
