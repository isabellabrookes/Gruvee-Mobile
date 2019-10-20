import { StyleSheet } from 'react-native'
import colors from '../colors'

export default StyleSheet.create({
    header: {
        paddingTop: 10,
        textAlign: 'center',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 30,
    },
    input: {
        width: '75%',
        marginBottom: 15,
        borderBottomColor: colors.input.border,
        borderBottomWidth: 0.5,
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    button: disabled => ({
        flexBasis: 44,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        borderWidth: 1,
        borderColor: disabled ? '#393939' : '#FFA440',
        backgroundColor: `${colors.background.default}B3`,
        margin: 10,
    }),
    buttonText: disabled => ({
        width: '100%',
        textAlign: 'center',
        color: disabled ? colors.input.border : colors.font.default,
    }),
})
