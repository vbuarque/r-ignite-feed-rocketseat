import styles from './Header.module.css'
import IgniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={IgniteLogo} alt="Logotipo do Ignite Feed" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
}