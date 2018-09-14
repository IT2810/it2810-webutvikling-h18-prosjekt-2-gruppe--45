import React, { Fragment } from 'react';

const ArtDisplay = ({ image, audio, text, files }) => (
  <Fragment>
    <div dangerouslySetInnerHTML={{ __html: image }} className="image-view" />

    <div>
      <h2 className="title">{text.title}</h2>

      <p className="text">{text.body}</p>

      <p className="author">{text.author}</p>
    </div>

    <audio loop autoPlay>
      <source src={audio} type="audio/mpeg" />
    </audio>

    <h3 className="attribution-header">Attribution</h3>

    <ul className="attribution-list">
      {files.image.author && (
        <li>
          Image courtesy of <a href={files.image.link}>{files.image.author}</a>
        </li>
      )}

      {files.text.author && (
        <li>
          Text courtesy of <a href={files.text.link}>{files.text.author}</a>
        </li>
      )}

      {files.audio.author && (
        <li>
          Audio courtesy of <a href={files.audio.link}>{files.audio.author}</a>
        </li>
      )}
    </ul>
  </Fragment>
);

export default ArtDisplay;
