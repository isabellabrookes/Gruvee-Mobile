import React from 'react'
import Typography from './Typography'

const Headline = ({ style, children, ...rest }) => {
    const HeadlineStyles = {
        fontSize: 17,
        fontWeight: 600,
    }
    return (
        <Typography style={[HeadlineStyles, style]} {...rest}>
            {children}
        </Typography>
    )
}
export default Headline
