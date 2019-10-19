import React from 'react'
import Typography from '../Typography'

const CardTitle = ({ style, children, ...rest }) => {
    const CardTitleStyles = {
        fontSize: 20,
        padding: 5,
    }
    return (
        <Typography
            color="white"
            weight="semi-bold"
            style={[CardTitleStyles, style]}
            {...rest}
        >
            {children}
        </Typography>
    )
}

export default CardTitle
