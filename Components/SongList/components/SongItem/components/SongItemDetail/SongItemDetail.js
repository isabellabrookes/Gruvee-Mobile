import React, { memo } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Card, { CardContent } from '@GruveeUI/Card'
import * as StyleConstants from '@StyleConstants'

const defaultAlbumArtworkAsset = require('Gruvee/Assets/Defaults/AlbumArtwork/default_album_cover_bg_image.png')

const SongItemDetail = ({ songData }) => {
    return (
        <Card style={styles.Container}>
            <Image
                style={styles.Image}
                source={{ uri: songData.albumArtwork }}
                // Android debug builds ignore default source cuz why not?
                defaultSource={defaultAlbumArtworkAsset}
                resizeMode="cover"
            />
            <View style={styles.DetailContainer}>
                <Text style={styles.SongTitleText}>{songData.name}</Text>
                <CardContent style={styles.SongDetailText}>
                    {songData.artist}
                </CardContent>
                <CardContent style={styles.SongDetailText}>
                    {songData.album}
                </CardContent>
                {/* TODO: Implement some sort of scroll for long Text */}
                <Text numberOfLines={1} style={styles.SongTitleText}>
                    {songData.name}
                </Text>
                <Text style={styles.SongDetailText}>{songData.artist}</Text>
                <Text style={styles.SongDetailText}>{songData.album}</Text>
            </View>
        </Card>
    )
}

// Styles
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        margin: 0,
    },
    Image: {
        width: StyleConstants.SONG_LIST_ITEM_ALBUM_ARTWORK_SIZE,
        height: StyleConstants.SONG_LIST_ITEM_ALBUM_ARTWORK_SIZE,
        borderTopLeftRadius: StyleConstants.SONG_LIST_ITEM_BORDER_RADIUS,
        marginRight: 15,
    },
    DetailContainer: {
        paddingTop: 5,
        paddingBottom: 8,
    },
    SongTitleText: {
        fontSize: StyleConstants.SONG_LIST_ITEM_TITLE_SIZE_iOS,
        fontWeight: StyleConstants.SEMIBOLD_WEIGHT,
        color: StyleConstants.BASE_FONT_COLOR,
        paddingBottom: 5,
    },
    SongDetailText: {
        // fontSize: StyleConstants.SONG_LIST_ITEM_DETAIL_SIZE_iOS,
        // color: StyleConstants.SONG_LIST_ITEM_DETAIL_COLOR,
    },
})

export default memo(SongItemDetail)
