import React from 'react'
import { Text } from 'react-native'

const Typography = ({ accessibilityLabel, weight, color, style, children }) => {
    const styles = {
        default: {
            color: '#E5DADA',
        },
        weight: {
            light: {
                fontWeight: 300,
            },
            medium: {
                fontWeight: 500,
            },
            semibold: {
                fontWeight: 600,
            },
            bold: {
                fontWeight: 700,
            },
        },
        color: {
            primary: '#E5DADA',
            white: '#FFFFF',
        },
    }
    return (
        <Text
            accessibilityLabel={accessibilityLabel}
            style={[
                styles.default,
                styles.weight[weight],
                styles.color[color],
                style,
            ]}
        >
            {children}
        </Text>
    )
}

export default Typography
