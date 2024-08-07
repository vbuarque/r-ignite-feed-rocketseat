import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Comment, Avatar } from './index';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content, hashtags }) {
    const [comments, setComments] = useState([]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormat = format(new Date(publishedAt), "dd 'de' MMMM, 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        
        setComments(commentsWithoutDeletedOne);
    }

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

                <time
                    title={publishedDateFormat}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content} >{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content} ><a href='#'>{line.content}</a></p>
                    }
                })}

                <p className={styles.hashtags}>
                    {hashtags.map(hashtag => {
                        return <a key={hashtag} href='#'>{hashtag}</a>
                    })}
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </article>
    )
}