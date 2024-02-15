import styles from ('../styles/Home.module.css');

function Home() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.imgBirdContainer}>
                    <img src="bird.png" />
                </div>
                <div className={styles.userInfoAndLogout}>
                    <div className={styles.userInfo}>
                        <div className={styles.userImg}>
                            <img src="egg.jpg"/>
                        </div>
                        <div className={styles.userNames}>
                            <div className={styles.userFirstname}>
                                <p>Andoni</p>
                            </div>
                            <div className={styles.userUsername}>
                                <p>@lapoule</p>
                            </div>
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

                </div>
            </div>
            <div className={styles.rightContainer}>
                <h2>Trends</h2>
                <div className={styles.trendsHashtagContainer}>

                </div>
            </div>
        </div>
    );
}