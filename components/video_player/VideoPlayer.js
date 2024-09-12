// src/components/VideoPlayer.js

import React from 'react';

const VideoPlayer = ({filename}) => {
    return (
        <div style={{flex: 1, display: "flex", alignItems: "center"}}>
            <video height="full" controls style={{maxWidth:'100%'}}>
                <source src={`/assets/about_video/${filename}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
