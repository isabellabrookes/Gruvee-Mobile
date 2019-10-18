import React from 'react'
import { View, StyleSheet } from 'react-native'
import SocialAuthButton from 'Gruvee/Components/Auth/SocialAuthButton'
import { Title, Headline } from 'Gruvee/@GruveeUI/Typography'
import { SOCIAL_PLATFORMS } from '../../SocialConstants'

const Auth = () => {
    return (
        <View style={styles.Container}>
            <View>
                <Title>Lets Get Grüvee</Title>
                <Headline style={styles.SectionDetail}>
                    Let all of your wildest memes come true. Just sell your soul
                    below.
                </Headline>
            </View>
            <View style={styles.ButtonContainer}>
                {SOCIAL_PLATFORMS.map(platform => (
                    <SocialAuthButton
                        key={platform.friendlyName}
                        platform={platform}
                    />
                ))}
            </View>
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    ButtonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '20%',
    },
    Container: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%',
        paddingTop: 100,
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    SectionDetail: {
        marginTop: 25,
    },
})

export default Auth
