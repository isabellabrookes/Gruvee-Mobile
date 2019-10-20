import React from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Card from '../Card'

import styles from './Modal.styles'

const Modal = ({ DismissOverlayID, style, children, ...rest }) => {
    const dismissOverlayAction = () => {
        Navigation.dismissOverlay(DismissOverlayID)
    }
    return (
        <View
            onStartShouldSetResponder={() => dismissOverlayAction()}
            style={[styles.backgroundOverlay]}
        >
            <Card style={[styles.modal, style]} {...rest}>
                {children}
            </Card>
        </View>
    )
}

export default Modal
