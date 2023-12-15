import React from 'react';
import './vidComponent.css';
const Video = ({ videoEmbedLink }) => {
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


            </div>

        </div>
    );
};

export default Video;