import { StyleSheet } from 'react-native'
import colors from '../colors'

export default StyleSheet.create({
    backgroundOverlay: {
        backgroundColor: `${colors.background.default}B3`,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...StyleSheet.absoluteFill,
    },
    modal: {
        width: '90%',
    },
})
