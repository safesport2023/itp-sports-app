import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React from 'react';
import { useState } from 'react';
// import Video from '../components/promoVideo'; // Make sure the path is correct




// const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';
const EducationPage = () => {
    const [watchedVideos, setWatchedVideos] = useState([1]); // First video is initially watched

    const handleWatchVideo = (videoNumber) => {
        if (watchedVideos.includes(videoNumber - 1)) {
            // Check if the previous video has been watched
            setWatchedVideos((prevWatched) => [...prevWatched, videoNumber]);
        } else {
            alert('Watch the previous video first!');
        }
    };

    return (
        <div className="education-page">
            <Authenticator className="auth-block">
                {({ signOut, user }) => (
                    <div className="video-container">
                        {/* Video 1 */}
                        {watchedVideos.includes(1) ? (
                            <div className="video-card">
                                <h3>Video 1</h3>
                                <p>Content for Video 1 goes here.</p>
                                <button onClick={() => handleWatchVideo(2)}>Watch Next</button>
                            </div>
                        ) : (
                            <div className="video-card-locked">
                                <h3>Video 1</h3>
                                <p>Content for Video 1 goes here.</p>
                            </div>
                        )}

                        {/* Video 2 */}
                        {watchedVideos.includes(2) ? (
                            <div className="video-card">
                                <h3>Video 2</h3>
                                <p>Content for Video 2 goes here.</p>
                                <button onClick={() => handleWatchVideo(3)}>Watch Next</button>
                            </div>
                        ) : (
                            <div className="video-card-locked">
                                <h3>Locked Video 2</h3>
                                {/* You can use an image or icon for the lock */}
                                <img src="lock-icon.png" alt="Locked" />
                            </div>
                        )}

                        {/* Video 3 */}
                        {watchedVideos.includes(3) ? (
                            <div className="video-card">
                                <h3>Video 3</h3>
                                <p>Content for Video 3 goes here.</p>
                                <button onClick={() => handleWatchVideo(4)}>Watch Next</button>
                            </div>
                        ) : (
                            <div className="video-card-locked">
                                <h3>Locked Video 3</h3>
                                {/* You can use an image or icon for the lock */}
                                <img src="lock-icon.png" alt="Locked" />
                            </div>
                        )}

                        {/* Video 4 */}
                        {watchedVideos.includes(4) ? (
                            <div className="video-card">
                                <h3>Video 4</h3>
                                <p>Content for Video 4 goes here.</p>
                            </div>
                        ) : (
                            <div className="video-card-locked">
                                <h3>Locked Video 4</h3>
                                {/* You can use an image or icon for the lock */}
                                <img src="lock-icon.png" alt="Locked" />
                            </div>
                        )}
                    </div>
                )}
            </Authenticator>
        </div>
    );
};

export default EducationPage;

