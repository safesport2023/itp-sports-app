import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React from 'react';
// import Video from '../components/promoVideo'; // Make sure the path is correct




// const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';
const EducationPage = () => {
    return (
        <div className='education-page'>
            <Authenticator className='auth-block'>
                {({ signOut, user }) => (
                    <div className='other'>
                        <div className='logout-btn'>
                            <button className='signOut-btn' onClick={signOut}>Sign Out</button>
                        </div>
                        <h1 className='text-h1'> Hello Welcome to ITP sports education site</h1>
                        <h3 className='text-h3'> this is a placeholder page until videos are completed</h3>

                        {/* <div className='video-Container'>
                            <Video videoEmbedLink={youtubeEmbedLink} />
                        </div> */}

                    </div>
                )}
            </Authenticator>
        </div>
    )
};

export default EducationPage;


