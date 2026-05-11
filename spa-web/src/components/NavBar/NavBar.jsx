import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo do Lotus Spa" width={120} height={100} />
                <h1>LOTUS SPA</h1>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contatos">Contato</Link>
                </li>
                <li>
                    <Link to="/parceria">Parceria</Link>
                </li>
            </ul>
        </nav>
    );
}
