import React from 'react'
import { Text } from 'react-native'
import colors from '../colors'

const Typography = ({ accessibilityLabel, weight, color, style, children }) => {
    const TypographyStyles = {
        default: {
            color: colors.font.default,
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
            primary: colors.font.default,
            white: colors.font.white,
        },
    }
    return (
        <Text
            accessibilityLabel={accessibilityLabel}
            style={[
                TypographyStyles.default,
                TypographyStyles.weight[weight],
                TypographyStyles.color[color],
                style,
            ]}
        >
            {children}
        </Text>
    )
}

export default Typography
