import React from 'react'
import Typography from './Typography'

const Title = ({ style, children, ...rest }) => {
    const TitleStyles = {
        fontSize: 34,
    }
    return (
        <Typography style={[TitleStyles, style]} {...rest}>
            {children}
        </Typography>
    )
}
export default Title
