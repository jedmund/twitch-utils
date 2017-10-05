import React, { Component } from 'react'
import AlbumArt from 'components/AlbumArt/AlbumArt'
import TrackInfo from 'containers/TrackInfo/TrackInfo'
import './Player.sass'

import nowPlayingData from 'data/now-playing.json'
import nowPlayingImage from 'data/now-playing.jpg'

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <div className="AlbumArt">
                    <img
                        className="Artwork"
                        src={nowPlayingImage}
                        alt="Album art"
                    />
                </div>
                <div className="info">
                    <TrackInfo>{nowPlayingData.title}</TrackInfo>
                    <TrackInfo>{nowPlayingData.artist}</TrackInfo>
                    <TrackInfo>{nowPlayingData.album}</TrackInfo>
                </div>
            </div>
        )
    }
}

export default Player
