import React , { useState } from "react";

const HeroSection = ({ onSubmit })=>{

    const [ city, setCity ] = useState("");

    const HandleSubmit = (e) =>{
        e.preventDefault();
        if(!city.trim()){
            alert('city name required');
            ReadableStreamDefaultController;
        }
        onSubmit(city);
    }

    return (
        <main>
            <div>
                <img>
                
                </img>
                <img>
                
                </img>


            </div>

            <div className="hero-content">
                <p>
                    Discover the perfect soundtrack for every weather
                </p>
                <h1>
                    Find your Perfect PlayList
                </h1>
                <p>Enter your name city name and discover a curated PlayList</p>
                <form onSubmit= { HandleSubmit }>

                    <input type = "text"
                     value= {city} 
                     onChange={(e) => setCity(e.target.value)}
                     className = "location-inp"
                     placeholder="Enter Your City"
                     required = "true"
                    />

                    <button type = "submit" className="submit-btn">
                        Find My PlayList
                    </button>

                </form>

            </div>
        
        </main>
    )
}