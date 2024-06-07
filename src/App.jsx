import { Post } from './Post';
import { Header } from './components';

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Vinicius Buarque"
        content="lorem ipsum indolor content acet"
      />

      <Post
        author="Vitor Augusto Barros"
        content="lorem ipsum indolor content acet orem ipsum indolor content acet"
      />
    </div>
  );
}