import React from 'react'
import Typography from './Typography'

const Headline = ({ style, children, ...rest }) => {
    const styles = {
        fontSize: 17,
        fontWeight: 600,
    }
    return (
        <Typography style={[styles, style]} {...rest}>
            {children}
        </Typography>
    )
}
export default Headline
