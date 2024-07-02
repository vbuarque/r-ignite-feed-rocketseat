import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment, Avatar } from './index';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content, hashtags }) {
    const publishedDateFormat = format(new Date(publishedAt), "dd 'de' MMMM, 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header className={styles.authorHeader}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
                <p className={styles.hashtags}>
                {hashtags.map(hashtag => (
                        <a href='#'>{hashtag}</a>
                    ))}
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
            
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}