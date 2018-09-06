import React from 'react';
import './ArtDisplayView.css';

const ArtDisplay = ({ image, audio, text }) => (
    <div className="art-display">
        <div dangerouslySetInnerHTML={{ __html: image }} />

        <p>{text}</p>

        <audio loop autoPlay>
            <source src={audio} type="audio/mpeg"/>
        </audio>
    </div>
);

export default ArtDisplay;