import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './PremiumPages.css';
import React from 'react';
import Video from '../components/Video'; // Make sure the path is correct




const youtubeEmbedLink = 'https://www.youtube.com/embed/KaT4Y4dYzMs';
const PremiumPage = () => {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <h1> Hello Welcome to ITP sports education site</h1>
                    <h3> you are now logged in</h3>
                    <button onClick={signOut}>Sign Out</button>
                    <Video videoEmbedLink={youtubeEmbedLink} />
                </div>
            )}
        </Authenticator>

    )
};

export default PremiumPage;


