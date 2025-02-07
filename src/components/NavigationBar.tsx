import React, { useState, useEffect } from "react";
import "../styles/NavigationBar.css";
import ProfilePic from '../assets/profile-picture.jpg';

const MotivationalMessages = [
  "Keep working hard!",
  "Stay positive and productive!",
  "Dream big!",
  "Keep smiling!",
  "You've got this!",
  "Stay strong!",
  "Keep moving forward!",
  "Dream big, Work hard!",
  "Never give up!",
  "Stay hungry for success!",
  "You're stronger than you think!",
  "Embrace the journey!",
  "Small steps, big impact!",
  "You are capable of amazing things!",
  "Every day is a new opportunity to grow!",
  "Success starts with a single step!",
  "Progress, not perfection!",
  "The best time to start is now!",
  "Small steps lead to big achievements!",
  "Make today count!",
  "Your only limit is your mindset!",
  "Dream big, work hard, stay focused!",
  "Failure is just another step toward success!",
  "Hard work always pays off!",
  "Don’t stop until you're proud!",
  "Your potential is limitless!",
  "Doubt kills more dreams than failure ever will!",
  "The struggle you’re in today builds strength for tomorrow!",
  "You’ve got this!",
  "Every effort counts!",
  "Turn obstacles into opportunities!",
  "Success is built one day at a time",
  "Trust the process!",
  "You were born to stand out!",
  "A little progress each day adds up to big results!",
  "Your mindset shapes your reality!",
  "You have the power to change your story!",
  "Work hard in silence, let success make the noise!",
  "Fear is temporary, but regret lasts forever!",
  "Be the reason someone smiles today!",
  "Discipline beats motivation every time!",
  "Do something today that your future self will thank you for!",
  "Success is a journey, not a destination!",
  "If it doesn’t challenge you, it won’t change you!",
  "Stay focused, stay humble, stay hungry!",
  "The only way to fail is to stop trying!",
  "You are unstoppable!",
  "The best investment you can make is in yourself!"
]

function getRandomMessage(): string {
  const randomIndex = Math.floor(Math.random() * MotivationalMessages.length);
  return MotivationalMessages[randomIndex];
}


const NavigationBar: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMessage(getRandomMessage());
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-message">
          <a href="/home" className="navbar-message-link">{message}</a>
        </span>
      </div>
      <div className="navbar-right">
        <a href="/userPage">
          <img
            src={ProfilePic}
            alt="Profile"
            className="navbar-profile-pic"
          />
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
