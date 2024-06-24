import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment() {
    return (
        <div className={styles.commentWrapper}>
            <img src="" alt="" /> 

            <div className={styles.commentSection}>

                <div className={styles.comment}>
                    <header>
                        <div className={styles.commentUsername}>
                            <div>
                                <strong>Vinicius Buarque</strong>
                                <span>(você)</span>
                            </div>

                            <div>
                                <time title='31 de Maio as 08:13h' dateTime="2024-05-31 08:13:30">Cerca de 2h</time>
                            </div>

                            <div>
                                <button>
                                    <Trash size={20} weight="bold" />
                                </button>
                            </div>
                        </div>
                    </header>

                </div>

                <footer className={styles.commentFoooter}>
                    <button href="#">
                        <ThumbsUp size={20} weight="bold" />
                    </button>
                    <div>Aplaudir • 03</div>
                </footer>
            </div>
        </div>
    );
}