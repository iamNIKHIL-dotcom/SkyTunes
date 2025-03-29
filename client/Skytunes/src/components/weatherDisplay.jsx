import React from 'react';

const WeatherDisplay = ({weatherData, playlistData})=>{
    if(!weatherData || !playlistData){
        return null;
    }

    const { temperature, weather, city }= weatherData;
    const { tracks, genre } = playlistData;
    
    // Spotify API returns tracks in tracks.tracks.items
    // Check the structure and access the items correctly
    console.log("Tracks structure:", tracks);
    
    // The correct path to access track items depends on the Spotify API response structure
    // It's likely tracks.tracks.items or just tracks.items
    const trackItems = tracks?.tracks?.items || [];
    console.log("Track items:", trackItems);

    return (
        <div className = "song display-section">
            <div className='weather-playlist-dsiplay'>

                {/* weather Info  */}
                <div className='weather-info'>
                    <img />
                    
                    <div className='weather-details'>
                        <h2 className='temperature'>{Math.floor(temperature)} °C</h2>
                        <p className="weather-description">{weather}</p>
                    </div>
                </div>

                {/* Playlist Info  */}
                <div>
                    {/* <div className="playlist-title">{weather} Vibes</div> */}

                    <p className='album-title'>Songs for the mood</p>
                    {
                        trackItems.length > 0 ? (
                            trackItems.slice(0,4).map((track,index) => (
                                <a
                                    key={track.id || index}
                                    className="song-details"
                                    href={track.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    <div className="album-img">
                                        <img
                                        className="album-img"
                                        src={track.album?.images[0]?.url}
                                        alt={`${track.name} album cover`}
                                        style={{ backgroundColor: 'rgb(22,22,22)' }}
                                        />
                                    </div>
                                    <div className="album-details">
                                        <div className="album-name">{track.name}</div>
                                        <div className="artist-name">{track.artists?.[0]?.name}</div>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p>No tracks available</p>
                        )
                    }

                    {trackItems.length > 0 && (
                        <a
                            href={trackItems[0]?.uri}
                            className="spotify-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-spotify"></i>
                            Open in Spotify
                        </a>
                    )}
                </div>
            </div>
            
        </div>
    )
}
export default WeatherDisplay;