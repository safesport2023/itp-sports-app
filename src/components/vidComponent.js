import React from 'react';
import './vidComponent.css';
const Video = ({ videoPath }) => {
    return (
        <div>
            <div className="video-container">
                <iframe
                    title="YouTube Video"
                    width="560"
                    height="315"
                    src={videoEmbedLink}
                    frameBorder="0"
                    allowFullScreen
                />
                <div className='videoTitle'>
                    <h2 className='title-font'>placeholder for promo video</h2>
                </div>

            </div>

        </div>
    );
};

export default Video;