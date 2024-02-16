import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import Image from 'next/image';

function Home() {

    const tweets = [
        {
            userImg: 'egg.png',
            firstname: 'Andoni',
            username: 'lapoule',
            time: 5,
            content: 'Vive le JS vanilla #LaureF',
            isLiked: false,
            likeNb: 12
        },
        {
            userImg: 'egg.png',
            firstname: 'Jean',
            username: 'Jean-Mich',
            time: 6,
            content: `Pourquoi les canards sont toujours à l'heure ? Parce qu’ils sont dans l’étang.`,
            isLiked: false,
            likeNb: 0
        },
        {
            userImg: 'egg.png',
            firstname: 'Laure',
            username: 'Laure-réal',
            time: 7,
            content: 'Parce que je le vaux bien',
            isLiked: false,
            likeNb: 18
        },
    ]

    const tweetComponents = tweets.map((tweet, i) => {
        return <Tweet key={i} userImg={tweet.userImg} firstname={tweet.firstname} username={tweet.username} time={tweet.time} content={tweet.content} likeNb={tweet.likeNb}/>
    });

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgBirdContainer}>
                    <img src="bird.png" alt="imgBird" />
                </div>
                <div className={styles.userInfoAndLogout}>
                    <div className={styles.userInfo}>
                        <div className={styles.userImg}>
                            <img src="egg.png" alt="userImg"/>
                        </div>
                        <div className={styles.userNames}>
                            <p className={styles.userFirstname}>Andoni</p>
                            <p className={styles.userUsername}>@lapoule</p>
                        </div>
                    </div>
                    <div className={styles.userLogout}>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
            <div className={styles.centerContainer}>
                <div className={styles.header}>
                    <h2>Home</h2>
                    <div className={styles.newTweetContainer}>
                        <div className={styles.newTweetInput}>
                            <input
                            type="text"
                            placeholder="What's up?"
                            />
                        </div>
                        <div className={styles.compteurAndButton}>
                            <p>8/280</p>
                            <button>Tweet</button>
                        </div>
                    </div>
                </div>
                <div className={styles.tweetsContainer}>
                    {tweetComponents}
                </div>
            </div>
            <div className={styles.rightContainer}>
                <h2>Trends</h2>
                <div className={styles.trendsContainer}>
                    <div className={styles.hashtagContainer}>
                        <div className={styles.hashtag}>Il faut mettre tous les hashtags dans un état tableau puis les afficher dans trendsContainer</div>
                        <div className={styles.tweetNb}>1 Tweet</div>
                    </div>
                    <div className={styles.hashtagContainer}>
                        <div className={styles.hashtag}>#cestleweekend</div>
                        <div className={styles.tweetNb}>3 Tweets</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;