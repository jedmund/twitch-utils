import React, { Component } from 'react'
import AlbumArt from 'components/AlbumArt/AlbumArt'
import TrackInfo from 'containers/TrackInfo/TrackInfo'
import Fetch from 'react-fetch'
import './Player.css'

class Player extends Component {
    render() {
        return (
            <div className="Player">
                <Fetch url="http://127.0.0.1:31338/now-playing.jpg">
                    <AlbumArt/>
                </Fetch>
                <div className="info">
                    <Fetch url="http://127.0.0.1:31338/now-playing.json">
                        <TrackInfo trackAttribute="title"/>
                        <TrackInfo trackAttribute="artist"/>
                        <TrackInfo trackAttribute="album"/>
                    </Fetch>
                </div>
            </div>
        );
    }
}

export default Player;
