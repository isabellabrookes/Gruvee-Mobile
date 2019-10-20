import { StyleSheet } from 'react-native'
import colors from '../colors'

export default StyleSheet.create({
    card: {
        width: '100%',
        backgroundColor: colors.background.card,
        borderRadius: 11,
        padding: 5,
        margin: 15,
    },
    content: {
        fontSize: 14,
        paddingHorizontal: 5,
        paddingVertical: 2.5,
    },
    title: {
        fontSize: 20,
        padding: 5,
    },
})
