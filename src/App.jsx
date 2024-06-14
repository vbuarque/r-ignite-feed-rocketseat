import { Header, Post, Sidebar } from './components';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Vinicius Buarque"
            content="lorem ipsum indolor content acet"
          />

          <Post
            author="Vitor Augusto Barros"
            content="lorem ipsum indolor content acet orem ipsum indolor content acet"
          />
        </main>
      </div>
    </div>
  );
}