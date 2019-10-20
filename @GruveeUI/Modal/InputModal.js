import React from 'react'
import { View } from 'react-native'
import Button from '../Button'
import Modal from './Modal'
import { Headline } from '../Typography'

import styles from './InputModal.styles'

import * as NavigationConstants from '@NavigationConstants'

const InputModal = ({ disabled, title, createAction, children }) => {
    return (
        <Modal DismissOverlayID={NavigationConstants.ADD_SONG_MODAL_NAV_ID}>
            <Headline style={styles.header}>{title}</Headline>
            <View style={styles.inputContainer}>{children}</View>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={createAction}
                    disabled={disabled}
                    style={styles.button(disabled)}
                >
                    <Headline style={styles.ButtonText}>Create</Headline>
                </Button>
            </View>
        </Modal>
    )
}
export default InputModal
