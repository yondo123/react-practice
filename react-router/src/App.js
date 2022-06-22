import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';
import Test from './pages/Test';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav></Nav>
                <Routes>
                    <Route path="/">
                        <Route path="home" element={<Home />} />
                        <Route path="profile/:userId" element={<Profile />} />
                        <Route path="board" element={<Board />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
