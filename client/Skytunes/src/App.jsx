import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import "./styles/main.css"

function App() {
  const [ weatherData, setWeatherData ] = useState(null);
  const [ playlistData, setPlaylistData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);
  const [error, setError ] = useState(null);
  

  const handleSubmit = async (city) => {
    try{
      setIsLoading(true);
      setError(null);
      const data = await getWeatherAndPlaylist(city);
      setWeatherData(data.weatherData);
      setPlaylistData(data.playlistData);
    }catch(error){
      setError(error.message);
      alert("Enter a valid city name or check your internet");
    }
    finally{
      setIsLoading(false);
    }
    
  }

  return (
    <>
      <NavBar></NavBar>

      <HeroSection onSubmit = {handleSubmit} />
    </>
  )
}

export default App
