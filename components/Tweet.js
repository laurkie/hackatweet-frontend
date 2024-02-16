import styles from '../styles/Tweet.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet(props){
    return(
        <div className={styles.tweet}>
            <div className={styles.tweetInfo}>
                <div className={styles.userImg}>
                    <img src={props.userImg} alt="userImg"/>
                </div>
                <div className={styles.userNames}>
                    <div className={styles.userFirstname}>
                        <p>{props.firstname}</p>
                    </div>
                    <div className={styles.userUsername}>
                        <p>@{props.username} ~ {props.time} Hours</p>
                    </div>
                </div>
            </div>
            <div className={styles.tweetContent}>{props.content}</div>
            <div className={styles.tweetLikes}>
                <FontAwesomeIcon icon={faHeart} />
                <span>   {props.likeNb}</span>
            </div>
        </div>
    );
}

export default Tweet;