import React from 'react';
import './Video.css'; // Import your CSS file

function Video({ videoEmbedLink }) {
    return (
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
    );
}

export default Video;
