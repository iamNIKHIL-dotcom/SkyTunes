const weatherApiKey = "86356b7b82d61c74478e6b855108c657"
const WEATHER_API_KEY = weatherApiKey
const BACKEND_URL = "http://localhost:3005"

export const getWeatherAndPlaylist = async (city) => {
    try {
      // Get weather data
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      );
      const weatherData = await weatherResponse.json();
  
      if (!weatherResponse.ok) {
        throw new Error('City not found');
      }
  
      // Get playlist data from backend
      const playlistResponse = await fetch(BACKEND_URL, {
        method: "POST",
        body: JSON.stringify({
          weather: weatherData,
          city: city,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (!playlistResponse.ok) {
        throw new Error('Failed to fetch playlist');
      }
  
      const playlistData = await playlistResponse.json();
      
      // Debug logs
      console.log("Weather data:", weatherData);
      console.log("Playlist data:", playlistData);
      console.log("Playlist tracks structure:", playlistData.tracks);
      
      // Make sure we're returning the data in the expected format
      return {
        weatherData: {
          temperature: weatherData.main.temp - 273,
          weather: weatherData.weather[0].main,
          city: city
        },
        playlistData: {
          // Pass the entire tracks object as is
          tracks: playlistData.tracks,
          genre: playlistData.genre
        }
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }; 