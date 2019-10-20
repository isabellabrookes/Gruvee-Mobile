import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import Card, { CardTitle, CardContent } from '@GruveeUI/Card'

const PlaylistDetailsCard = ({ name, numMembers, numSongs }) => {
    return (
        <Card light style={styles.Container}>
            <CardTitle>{name}</CardTitle>
            <CardContent>{numMembers} Members</CardContent>
            <CardContent>{numSongs} Songs</CardContent>
        </Card>
    )
}

// Styles
const styles = StyleSheet.create({
    Container: {
        width: '60%',
        margin: 15,
        opacity: 0.8,
    },
})

export default memo(PlaylistDetailsCard)
