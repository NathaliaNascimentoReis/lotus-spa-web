import './App.module.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <main>
                    <Routes>

                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}
