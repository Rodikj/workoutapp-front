import React, { useEffect } from "react";
import "../styles/HomePage.css";
import MenuItem from "../components/MenuItem";
import ExerciseImage from "../assets/exerciseImage.jpg";
import ShopImage from "../assets/shopImage.jpg";
import CalculatorImage from "../assets/calculator-bg4.jpg";
import NavigationBar from "../components/NavigationBar";

const markers = [
  { name: "Fitness Club Fit", lat: 41.9966995, lng: 21.4154197 },
  { name: "Herba Stojanovi", lat: 41.9881742, lng: 21.435841 },
  { name: "Mix Aerobic - Skopje", lat: 41.9754195, lng: 21.4387703 },
  { name: "Fit One - OU Kiril Pejcinovik", lat: 41.9781682, lng: 21.4439285 },
  { name: "Sport Inn", lat: 41.9913139, lng: 21.4403279 },
  { name: "Yoga Center Skopje", lat: 42.001114, lng: 21.383492 },
  { name: "Power Plate Fitness Center", lat: 41.9963049, lng: 21.4221233 },
  { name: "Dr. Robinson Health Club", lat: 41.9942634, lng: 21.419986 },
  { name: "Gymnastics Club Partizan / Orce Nikolov", lat: 42.0034729, lng: 21.4258273 },
  { name: "Healthy Centar", lat: 41.9911374, lng: 21.4354953 },
  { name: "Fitness Center Project Fit", lat: 41.99287, lng: 21.4159838 },
  { name: "Fitness & Spa Park", lat: 42.00632299999999, lng: 21.427159 },
  { name: "Kinetics Fitness Studio", lat: 41.9956775, lng: 21.4124007 },
  { name: "Yoga Studio Delfy Spirit", lat: 41.9871399, lng: 21.4345638 },
  { name: "My Trainer", lat: 41.9796643, lng: 21.4399674 },
  { name: "Synergy - Fitness & Spa", lat: 41.9915564, lng: 21.452169 },
];

const HomePage: React.FC = () => {
  document.body.className = "home-body";

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwF2gO7zE_BSnPKVaTdxrQuIIQsLFreCQ&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
    };

    (window as any).initMap = () => {
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 41.9981, lng: 21.4267 },
        zoom: 13,
      });

      markers.forEach((marker) => {
        new google.maps.Marker({
          position: { lat: marker.lat, lng: marker.lng },
          map: map,
          title: marker.name,
        });
      });
    };

    loadGoogleMaps();
  }, []);

  return (
    <div className="nav-container">
      <NavigationBar />

      <div className="homepage-container">
        <div className="map-container">
          <div id="map" className="google-map"></div>
        </div>
        
        <div className="menu-container">
          <MenuItem label="Exercises" link="/exercise" image={ExerciseImage} />
          <MenuItem label="Shop" link="/shop" image={ShopImage} />
          <MenuItem label="Calculators" link="/calculators" image={CalculatorImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
