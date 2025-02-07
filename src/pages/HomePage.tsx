import React from 'react';
import '../styles/HomePage.css';
import MenuItem from '../components/MenuItem';
import ExerciseImage from '../assets/exerciseImage.jpg';
import ShopImage from '../assets/shopImage.jpg';
import CalculatorImage from '../assets/calculatorImage.jpg';
import NavigationBar from '../components/NavigationBar';

const HomePage: React.FC = () => {
  document.body.className = 'home-body';
  return (
    <div className='nav-container'>
      <NavigationBar />
    <div className="homepage-container">
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2918.772728075297!2d21.426679052220095!3d41.998076707718745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smk!4v1736280518528!5m2!1sen!2smk"
          className="google-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="menu-container">
        <MenuItem label="Exercises" link="/exercise" image={ExerciseImage}/>
        <MenuItem label="Shop" link="/shop" image={ShopImage} />
        <MenuItem label="Calculators" link="/calculators"  image={CalculatorImage} />
      </div>
    </div>
    </div>
  );
};

export default HomePage;
