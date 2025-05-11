import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import "./styles/main.css"
import ErrorBoundary from "./components/ErrorBoundary"
import HeroSection from "./components/HeroSection"
import WeatherDisplay from "./components/WeatherDisplayTemp"
import Footer from "./components/Footer"

import { getWeatherAndPlaylist } from './utils/api'
import LoadingSpinner from './components/LoadingSpinner'


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [playlistData, setPlaylistData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (city) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getWeatherAndPlaylist(city);
      setWeatherData(data.weatherData);
      setPlaylistData(data.playlistData);
    } catch (error) {
      setError(error.message);
      alert("Enter a valid city name or check your internet");
    }
    finally {
      setIsLoading(false);
    }

  }

  return (
    <div className='app'>
      <NavBar></NavBar>

      <ErrorBoundary>

        <HeroSection onSubmit={handleSubmit} />
        { isLoading && <LoadingSpinner /> }

        {weatherData && playlistData && (
          <WeatherDisplay weatherData={weatherData}
            playlistData={playlistData} />
        )}

        <Footer></Footer>
      </ErrorBoundary>



    </div>
  )
}

export default App
