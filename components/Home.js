import styles from '../styles/Home.module.css';
import Tweet from './Tweet';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getTimeDelta from '../modules/getTimeDelta';

function Home() {

    const user = useSelector(state => state.user.value);
    const [newTweetContent, setNewTweetContent] = useState('');
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(tweet => {
                    const { hours, minutes } = getTimeDelta(new Date(tweet.time), new Date());
                    tweet.hourDelta = hours;
                    tweet.minutesDelta = minutes;
                    return tweet;
                })
                setTweets(formattedData);
            })
    }, [newTweetContent]);

    function handleNewTweet(){
        fetch('http://localhost:3000/tweets/newtweet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: user.token,
                content: newTweetContent,
                time: new Date(),
                hashtags: 'ok'
            })
        }).then(response => response.json())
            .then(data => {
                if(data){
                    setNewTweetContent('');
                }
            });
    }

    const tweetComponents = tweets.map((tweet, i) => {
        return <Tweet key={i} {...tweet} />
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
                            <img src={user.userImg} alt="userImg"/>
                        </div>
                        <div className={styles.userNames}>
                            <p className={styles.userFirstname}>{user.firstname}</p>
                            <p className={styles.userUsername}>@{user.username}</p>
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
                            onChange={(e) => setNewTweetContent(e.target.value)}
                            type="text"
                            placeholder="What's up?"
                            value={newTweetContent}
                            />
                        </div>
                        <div className={styles.compteurAndButton}>
                            <p>8/280</p>
                            <button onClick={() => handleNewTweet()}>Tweet</button>
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