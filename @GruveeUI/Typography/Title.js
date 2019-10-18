import React from 'react'
import Typography from './Typography'

const Title = ({ style, children, ...rest }) => {
    const styles = {
        fontSize: 34,
    }
    return (
        <Typography style={[styles, style]} {...rest}>
            {children}
        </Typography>
    )
}
export default Title
