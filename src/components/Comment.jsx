import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment() {
    return (
        <div className={styles.commentWrapper}>
            <img src="https://github.com/vbuarque.png" alt="" />

            <div className={styles.commentSection}>
                <div className={styles.comment}>
                    <header>
                        <div className={styles.commentUser}>
                            <div className={styles.userName}>
                                <strong>Vinicius Buarque</strong>
                                <span>(você)</span>
                            </div>
                            <time title='31 de Maio as 08:13h' dateTime="2024-05-31 08:13:30">Cerca de 2h</time>
                        </div>

                        <button>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer className={styles.commentFooter}>
                    <button>
                        <ThumbsUp size={20} />
                        <strong>Aplaudir • 03</strong>
                    </button>
                </footer>
            </div>
        </div>
    );
}