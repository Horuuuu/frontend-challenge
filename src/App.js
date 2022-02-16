import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Menu } from './components/Menu';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
