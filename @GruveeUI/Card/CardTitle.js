import React from 'react'
import Typography from '../Typography'

const CardTitle = ({ style, children, ...rest }) => {
    const cardTitleStyles = {
        fontSize: 20,
        padding: 5,
    }
    return (
        <Typography
            color="white"
            weight="semi-bold"
            style={[cardTitleStyles, style]}
            {...rest}
        >
            {children}
        </Typography>
    )
}

export default CardTitle
