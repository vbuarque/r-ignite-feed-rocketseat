import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.authorHeader}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/vbuarque.png" alt="" />

                    <div className={styles.authorInfo}>
                        <strong>Vinicius Buarque</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='31 de Maio as 08:13h' dateTime="2024-05-31 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
                <p className={styles.hashtags}>
                    <a href="">#novoprojeto</a>
                    <a href="">#nlw</a>
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Escreva um comentário..."
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <Comment />
        </article>
    )
}