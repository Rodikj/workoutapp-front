import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ExercisePage from './pages/ExercisePage';
import ShopPage from './pages/ProductsPage';
import CalculatorsPage from './pages/CalculatorsPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </Router>
  )
}

export default App
