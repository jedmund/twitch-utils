import React, { Component } from 'react'
import Art from 'data/now-playing.jpg'
import './AlbumArt.css'

class AlbumArt extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="AlbumArt">
                <img className="Artwork" src={Art} alt="Album art"/>
            </div>
        );
    }
}

export default AlbumArt
