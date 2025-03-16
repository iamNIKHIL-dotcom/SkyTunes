import React from 'react';

const weatherDisplay = ({weatherData, playlistData})=>{
    if(!weatherData || playlistData){
        return null;
    }

    const { temperature, weather, city }= weatherData;
    const { tracks, genre } = playlistData;

    return (
        <div className = "song display-section">
            <div className='weather-playlist-dsiplay'>

                {/* weather Info  */}
                <div className='weather-info'>
                    <img />
                    
                    <div className='weather-details'>
                        <h2 className='temperature'>{Math.floor(temperature)}</h2>
                        <p className="weather-description">{weather}</p>
                    </div>
                </div>

                {/* Playlist Info  */}
                <div>
                    <div className="playlist-tile">{weather} Vibes</div>

                    <p className='album-title'>Songs for the mood</p>
                    {
                        tracks.items.slice(0,4).map((tracks,index) => {
                            <a
                                key={track.id}
                                className="song-details"
                                href={track.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <div className="album-img">
                                    <img
                                    className="album-img"
                                    src={track.album.images[0].url}
                                    alt={`${track.name} album cover`}
                                    style={{ backgroundColor: 'rgb(22,22,22)' }}
                                    />
                                </div>
                                <div className="album-details">
                                    <div className="album-name">{track.name}</div>
                                    <div className="artist-name">{track.artists[0].name}</div>
                                </div>
                            </a>
                        })
                    }

                    <a
                        href={tracks.items[0]?.uri}
                        className="spotify-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    Open in Spotify
                     </a>
                </div>
            </div>
            
        </div>
    )
}
export default weatherDisplay;