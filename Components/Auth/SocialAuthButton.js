import React from 'react'
import { Navigation } from 'react-native-navigation'
import { StyleSheet, Image } from 'react-native'
import { Button, Typography } from '@GruveeUI'
import * as NavigationConstants from '@NavigationConstants'
import * as StyleConstants from '@StyleConstants'

/*
    ButtonID/Buttom ie: spotify, youtube, soundcloud
    Can use id for glyph lookup
    Can also set computed title ie: 'Log In With {FriendlyName}'
    Pass in flag to center button

    id: string (social name) ie: 'spotify'
    centerButton: bool
*/
const SocialAuthButton = ({ platform }) => {
    const navigateToPlaylists = () => {
        Navigation.push(NavigationConstants.STACK_ID, {
            component: {
                name: NavigationConstants.PLAYLIST_NAV_NAME,
                options: {
                    topBar: {
                        title: {
                            text: 'Playlists',
                        },
                    },
                },
            },
        })
    }

    return (
        <Button onPress={navigateToPlaylists} style={styles.Button(platform)}>
            <Image
                style={styles.ButtonIcon(platform)}
                source={platform.glyphPath}
            />
            <Typography
                weight="semi-bold"
                accessibilityLabel={`${platform.friendlyName} login button`}
                style={styles.ButtonText(platform)}
            >
                Log In With {platform.friendlyName}
            </Typography>
        </Button>
    )
}

// Styles
const styles = StyleSheet.create({
    Button: platform => ({
        backgroundColor: platform.color.primary,
    }),
    ButtonIcon: platform => ({
        width: platform.size.width,
        height: platform.size.height,
        marginRight: 10,
        resizeMode: 'contain',
    }),
    ButtonText: platform => ({
        color: platform.color.secondary,
        fontSize: StyleConstants.BUTTON_TEXT_SIZE_iOS,
    }),
})

export default SocialAuthButton
