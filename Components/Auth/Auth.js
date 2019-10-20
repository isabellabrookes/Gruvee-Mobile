import React from 'react'
import { View, StyleSheet } from 'react-native'
import SocialAuthButton from 'Gruvee/Components/Auth/SocialAuthButton'
import { Title, Headline } from '@GruveeUI/Typography'
import { SOCIAL_PLATFORMS } from '../../SocialConstants'

const Auth = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.WelcomeContainer}>
                <Headline weight="bold" style={styles.Headline}>
                    Lets Get
                </Headline>
                <Title weight="bold" style={styles.Title}>
                    Grüvee
                </Title>
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
    Container: {
        justifyContent: 'space-between',
        paddingTop: 100,
        paddingBottom: 25,
        paddingHorizontal: 25,
        flex: 1,
    },
    WelcomeContainer: {
        flex: 4,
    },
    Headline: {
        fontSize: 30,
    },
    Title: {
        fontSize: 80,
    },
    SectionDetail: {
        marginTop: 25,
    },
    ButtonContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default Auth
