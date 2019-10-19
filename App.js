/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'
import colors from '@GruveeUI/colors'
import Auth from './Components/Auth/Auth'

const styles = StyleSheet.create({
    body: {
        height: '100%',
        backgroundColor: colors.background.default,
    },
})

const App = () => {
    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.body}>
                <View>
                    <Auth />
                </View>
            </SafeAreaView>
        </>
    )
}

export default App
