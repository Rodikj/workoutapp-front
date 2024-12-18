import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
