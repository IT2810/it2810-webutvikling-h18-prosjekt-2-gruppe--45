import React, { Fragment } from 'react';

const ArtDisplay = ({ image, audio, text, files }) => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: image }} />

    <h3>{text.title}</h3>
    <p className="text">{text.text}</p>
    <p>{text.author}</p>

    <audio loop autoPlay>
      <source src={audio} type="audio/mpeg" />
    </audio>

    <h4>Attribution</h4>

    {files.image.author && (
      <p>
        Image courtesy of <a href={files.image.link}>{files.image.author}</a>
      </p>
    )}

    {files.text.author && (
      <p>
        Text courtesy of <a href={files.text.link}>{files.text.author}</a>
      </p>
    )}

    {files.audio.author && (
      <p>
        Audio courtesy of <a href={files.audio.link}>{files.audio.author}</a>
      </p>
    )}
  </Fragment>
);

export default ArtDisplay;
