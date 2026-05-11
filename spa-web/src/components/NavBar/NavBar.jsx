import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NarBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Lotus Spa</div>
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
