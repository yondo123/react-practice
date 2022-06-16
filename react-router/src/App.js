import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/board" element={<Board />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
