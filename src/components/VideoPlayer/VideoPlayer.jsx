import React from 'react';
import ReactPlayer from 'react-player'

export const VideoPlayer = ({ url }) => {
    return(
        <ReactPlayer url={url} controls={true} />
    )
};