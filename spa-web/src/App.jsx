import './App.module.css';
import NarBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Servicos from './pages/Servicos/Servicos';
import Contatos from './pages/Contatos/Contatos';
import Parceria from './pages/Parceria/Parceria.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <NarBar></NarBar>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/servicos" element={<Servicos />} />
                        <Route path="/contatos" element={<Contatos />} />
                        <Route path="/parceria" element={<Parceria />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}
