import { StyleSheet } from 'react-native'
import colors from '../colors'

export default StyleSheet.create({
    default: (color, weight) => ({
        color: color === 'white' ? colors.font.white : colors.font.default,
        fontWeight: findWeight(weight),
    }),
    headline: {
        fontSize: 17,
    },
    title: {
        fontSize: 34,
    },
})

const findWeight = weight => {
    switch (weight) {
        case 'light':
            return '300'
        case 'medium':
            return '500'
        case 'semibold':
            return '600'
        case 'bold':
            return '700'
        default:
            return '300'
    }
}
