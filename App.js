/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import colors from '@GruveeUI/colors'
import Auth from './Components/Auth/Auth'

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.background.default,
        flex: 1,
    },
})

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.body}>
                <Auth />
            </SafeAreaView>
        </>
    )
}

export default App
