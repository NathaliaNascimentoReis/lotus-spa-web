import styles from './Home.module.css';
import lotus from '../../assets/lotusFlor.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <home className={styles.home}>
            <div className={styles.inicio}>
                <h1 className={styles.titulo}>Seu momento de equilíbrio</h1>
                <img src={lotus} alt="Flor de Lotus" />
                <p>Relaxe, remove e cuide de você</p>
                <Link to="/servicos">Servicos</Link>
            </div>            
        </home>
    );
}

export default Home;