

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import Video from '../components/vidComponent';

Amplify.configure(awsconfig);

const EducationPage = () => {
    const [watchedVideos, setWatchedVideos] = useState([1]); // First video is initially watched
    const [activeVideo, setActiveVideo] = useState(1); // Track the currently active video

    const handleWatchVideo = (videoNumber) => {
        if (watchedVideos.includes(videoNumber - 1)) {
            // Check if the previous video has been watched
            setWatchedVideos((prevWatched) => [...prevWatched, videoNumber]);
            setActiveVideo(videoNumber); // Set the currently active video
        } else {
            alert('Watch the previous video first!');
        }
    };


    // Function to handle the 'ended' event for a video
    const handleVideoEnd = (videoNumber) => {
        // Trigger logic for marking the video as watched
        handleWatchVideo(videoNumber);
    };

    const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';

    return (
        <div className="education-page">
            <Authenticator className="auth-block">
                {({ signOut, user }) => (
                    <div className="education-page">
                        <div className='logout-btn'>
                            <button className='signOut-btn' onClick={signOut}>Sign Out</button>
                        </div>

                        {/* Video 1 */}
                        <div className={activeVideo === 1 ? 'video-card' : 'video-card-locked'}>
                            <h3>Video 1</h3>
                            {activeVideo === 1 ? (
                                <Video videoEmbedLink={youtubeEmbedLink} onEnded={() => handleVideoEnd(2)} />
                            ) : (
                                <div className='lockedVideo'></div>
                            )}
                            {watchedVideos.includes(1) && <button onClick={() => handleWatchVideo(2)}>Watch Next</button>}
                        </div>

                        {/* Video 2 */}
                        <div className={activeVideo === 2 ? 'video-card' : 'video-card-locked'}>
                            <h3>Video 2</h3>
                            {activeVideo === 2 ? (
                                <Video videoEmbedLink={youtubeEmbedLink} onEnded={() => handleVideoEnd(3)} />
                            ) : (
                                <div className='lockedVideo'></div>
                            )}
                            {watchedVideos.includes(2) && <button onClick={() => handleWatchVideo(3)}>Watch Next</button>}
                        </div>

                        {/* Video 3 */}
                        <div className={activeVideo === 3 ? 'video-card' : 'video-card-locked'}>
                            <h3>Video 3</h3>
                            {activeVideo === 3 ? (
                                <Video videoEmbedLink={youtubeEmbedLink} onEnded={() => handleVideoEnd(4)} />
                            ) : (
                                <div className='lockedVideo'></div>
                            )}
                            {watchedVideos.includes(3) && <button onClick={() => handleWatchVideo(4)}>Watch Next</button>}
                        </div>

                        {/* Video 4 */}
                        <div className={activeVideo === 4 ? 'video-card' : 'video-card-locked'}>
                            <h3>Video 4</h3>
                            {activeVideo === 4 ? (
                                <Video videoEmbedLink={youtubeEmbedLink} />
                            ) : (
                                <div className='lockedVideo'></div>
                            )}
                        </div>
                    </div>
                )}
            </Authenticator>
        </div>
    );
};

export default EducationPage;
