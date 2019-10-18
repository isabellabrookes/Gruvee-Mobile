import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import Card, { CardTitle, CardContent } from 'Gruvee/@GruveeUI/Card'

const PlaylistDetailsCard = ({ name, numMembers, numSongs }) => {
    return (
        <Card light opacity={0.8} style={styles.Container}>
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
        padding: 5,
    },
})

export default memo(PlaylistDetailsCard)
