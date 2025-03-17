import React, { useState } from 'react';
//

const HeroSection = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) {
      alert('City Name Required!!!');
      return;
    }
    onSubmit(city);
  };

  return (
    <main className="hero-section">
      <div className="emoji-container">
        <img 
          className="emoji e1" 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Rain.png" 
          alt="Cloud with Rain" 
        />
        <img 
          className="emoji e2" 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Lightning%20and%20Rain.png" 
          alt="Cloud with Lightning and Rain" 
        />
        <img 
          className="emoji e3" 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Cloud%20with%20Snow.png" 
          alt="Cloud with Snow" 
        />
        <img 
          className="emoji e7" 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun%20Behind%20Small%20Cloud.png" 
          alt="Sun Behind Small Cloud"
        />
        <img 
          className="emoji e6" 
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Sun%20Behind%20Rain%20Cloud.png" 
          alt="Sun Behind Rain Cloud" 
        />
      </div>
      
      <div className="hero-content">
        <p className="banner">Discover the perfect soundtrack for every weather.</p>
        <h1 className="title">Find Your Perfect Playlist</h1>
        <p className="description">Enter your city name and discover a playlist tailored to your weather.</p>
        <form onSubmit={handleSubmit} className="location-input-section">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="location-inp"
            placeholder="Enter your City"
            required
          />
          <button type="submit" className="submit-btn">
            <span>
              {/* <FontAwesomeIcon icon={faSpotify} /> */}
            </span>
            Find My Playlist
          </button>
        </form>
      </div>
    </main>
  );
};

export default HeroSection; 