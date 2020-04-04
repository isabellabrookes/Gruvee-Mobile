import { StyleSheet } from 'react-native'
import { BASE_FONT_COLOR } from '@StyleConstants'

export default StyleSheet.create({
    Container: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        height: 44,
        borderRadius: 5,
        backgroundColor: '#424242',
    },
    Input: {
        flexGrow: 1,
        color: 'white',
        fontSize: 12,
    },
    InputPlaceHolderColor: {
        color: BASE_FONT_COLOR,
    },
})
