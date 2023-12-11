import './Home.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React from 'react';
import Video from '../components/Video'; // Make sure the path is correct


const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';
const Home = () => {
    return (
        <div className='home-page'>

            <Authenticator className='auth-block'>
                {({ signOut, user }) => (
                    <div className='other'>
                        <h1> Hello Welcome to ITP sports education site</h1>
                        <h3> you are now logged in</h3>
                        <button className='signOut-btn' onClick={signOut}>Sign Out</button>
                        <div className='video-Container'>
                            <Video videoEmbedLink={youtubeEmbedLink} />
                        </div>

                    </div>
                )}
            </Authenticator>
            <div className='welcome-statement'>
                <h3>Welcome to Safe Sport Education for Youth! This education is brought to you by the National Sports Organizations of Athletics, Volleyball, and swimming. These videos are short and view only (easy right?) and will provide you with beneficial information on the new movement in sport called Safe Sport.

                    Every athlete deserves a sport experience free of maltreatment and abuse. Further, you all also deserve a fun, positive environment. We have tailored this education to the ages of 13-19. If you are under 13, please attain permission from your guardian(s).

                    Some of the information you will hear could be confronting and hard to hear, so please visit our resource page (link here) for support that is available to you. </h3>
            </div>
        </div>
    );
};

export default Home;