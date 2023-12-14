import './Home.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './EducationPages.css';
import React from 'react';
import Video1 from '../components/promoVideo'; // Make sure the path is correct
// import Video from '../components/vidComponent'; // Make sure the path is correct

const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';
// const localVideoPath = '../../public/assets/placeholder1.mp4';
const Home = () => {
    return (
        <div className='home-page'>

            <Authenticator className='auth-block'>
                {({ signOut, user }) => (
                    <div className='other'>
                        <div className='logout-btn'>


                            <button className='signOut-btn' onClick={signOut}>Sign Out</button>
                        </div>



                    </div>
                )}
            </Authenticator>
            <div className='welcome-statement'>
                <h3>Welcome to Safe Sport Education for Youth! This education is brought to you by the National Sports Organizations of Athletics, Volleyball, and swimming. These videos are short and view only (easy right?) and will provide you with beneficial information on the new movement in sport called Safe Sport.
                    <br></br>
                    <br></br>

                    Every athlete deserves a sport experience free of maltreatment and abuse. Further, you all also deserve a fun, positive environment. We have tailored this education to the ages of 13-19. If you are under 13, please attain permission from your guardian(s).

                    <br></br>
                    <br></br>
                    Some of the information you will hear could be confronting and hard to hear, so please visit our resource page (link here) for support that is available to you. </h3>
            </div>

            <div className='video-Container'>
                <Video1 videoEmbedLink={youtubeEmbedLink} />
                {/* <Video videoPath={localVideoPath} /> */}

            </div>

            <div className='gap-container'>
            </div>
        </div>
    );
};

export default Home;