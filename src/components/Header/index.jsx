import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>Calculadora de IMC</h1>
            <h2 className={styles.subtitulo}>Informe sua altura e seu peso.</h2>
        </header>
    )
}

export default Header