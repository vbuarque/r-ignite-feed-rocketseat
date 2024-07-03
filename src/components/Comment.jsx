import { Avatar } from './index';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {   
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vbuarque.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Buarque</strong>
                            <time title='31 de Maio as 08:13h' dateTime="2024-05-31 08:13:30">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer className={styles.commentFooter}>
                    <button>
                        <ThumbsUp size={20} />
                        <strong>Aplaudir<span>20</span></strong>
                    </button>
                </footer>
            </div>
        </div>
    );
}