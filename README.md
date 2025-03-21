# SkyTunes

SkyTunes is a web application that provides weather information and music playlists based on the city name entered by the user. It uses the OpenWeatherMap API for weather data and the Spotify API for music playlists.

## Features

- Get current weather information for any city.
- Discover music playlists tailored to the current weather conditions.
- Modern and responsive UI with a sleek design.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- A Spotify Developer account to obtain client credentials.
- An OpenWeatherMap API key.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/SkyTunes.git
   cd SkyTunes
   ```

2. **Install server dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**

   ```bash
   cd ../client/Skytunes
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:

   ```plaintext
   API_KEY=your_openweathermap_api_key
   clientId=your_spotify_client_id
   clientSecret=your_spotify_client_secret
   PORT=3005
   ```

## Running the Application

1. **Start the server:**

   Open a terminal and run:

   ```bash
   cd server
   node index.js
   ```

2. **Start the client:**

   Open another terminal and run:

   ```bash
   cd client/Skytunes
   npm run dev
   ```

3. **Access the application:**

   After starting the client, the Vite development server will provide a link in the terminal, typically something like `http://localhost:5173` or another port. Open this link in your web browser to use SkyTunes.

## Usage

- Enter a city name in the input field and click "Find My Playlist" to get the weather and a music playlist.
- The application will display the current weather and a list of tracks suitable for the weather conditions.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or feedback, feel free to reach out at your-email@example.com.
