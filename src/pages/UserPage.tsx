import React, { useEffect, useState } from 'react';
import '../styles/UserPage.css';
import NavigationBar from '../components/NavigationBar';

interface UserProfile {
  name: string;
  lastName: string;
  age: number;
  height: number;
  weight: number;
  userName: string;
  gender: string;
}

const UserPage: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userDTO');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <>
        <NavigationBar />
        <div className="user-profile-wrapper">
          <div className="user-profile-card">
            <h2>Cannot find user!</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavigationBar />
      <div className="user-profile-wrapper">
        <div className="user-profile-card">
          <h2>User Profile</h2>

          <div className="user-profile">
            <div className="profile-info">
              <label>Name:</label>
              <span>{user.name}</span>
            </div>

            <div className="profile-info">
              <label>Last Name:</label>
              <span>{user.lastName}</span>
            </div>

            <div className="profile-info">
              <label>Age:</label>
              <span>{user.age}</span>
            </div>

            <div className="profile-info">
              <label>Height (cm):</label>
              <span>{user.height}</span>
            </div>

            <div className="profile-info">
              <label>Weight (kg):</label>
              <span>{user.weight}</span>
            </div>

            <div className="profile-info">
              <label>Username:</label>
              <span>{user.userName}</span>
            </div>

            <div className="profile-info">
              <label>Gender:</label>
              <span>{user.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
