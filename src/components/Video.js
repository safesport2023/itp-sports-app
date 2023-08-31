import React from 'react';
import './Video.css'; // Import your CSS file

function Video({ videoEmbedLink }) {
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
                    <h2>This is placeholder video content</h2>
                </div>

            </div>

        </div>
    );
}

export default Video;
