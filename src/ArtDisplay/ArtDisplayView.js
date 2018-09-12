import React, { Fragment } from 'react';

const ArtDisplay = ({ image, audio, text }) => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: image }} />

    <p>{text}</p>

    <audio loop autoPlay>
      <source src={audio} type="audio/mpeg" />
    </audio>
  </Fragment>
);

export default ArtDisplay;
