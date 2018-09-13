import React, { Fragment } from 'react';

const ArtDisplay = ({ image, audio, text }) => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: image }} className="image-view" />

    <div>
      <h3>{text.title}</h3>
      <p className="text">{text.body}</p>
      <p>{'~ ' + text.author}</p>
    </div>

    <audio loop autoPlay>
      <source src={audio} type="audio/mpeg" />
    </audio>
  </Fragment>
);

export default ArtDisplay;
