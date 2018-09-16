import React, { Component } from 'react';
import MediaPicker from '../MediaPicker';
import ArtPicker from '../ArtPicker';
import ArtDisplay from '../ArtDisplay';
import { subCategories } from './files';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    // Create an array with three random indexes between 0 and 2.
    let randomIndexes = [];

    for (let i = 0; i < 3; i++) {
      randomIndexes.push(Math.floor(Math.random() * 3));
    }

    // Lists of strings for available categories for images, audios and texts.
    const IMAGES = [
      subCategories.CHICKEN,
      subCategories.FLAMES,
      subCategories.WEATHER,
    ];

    const AUDIOS = [
      subCategories.PIGS,
      subCategories.FLAMES,
      subCategories.WEATHER,
    ];

    const TEXTS = [
      subCategories.FLAMES,
      subCategories.JOKES,
      subCategories.SONGS,
    ];

    /**
     * States for the three formats of categories. The initial
     * configuration is randomized.
     * @type {{image: string, audio: string, text: string}}
     */
    this.state = {
      image: IMAGES[randomIndexes[0]],
      audio: AUDIOS[randomIndexes[1]],
      text: TEXTS[randomIndexes[2]],
      entry: 0,
    };
  }

  /**
   * Handles change of image when selecting image category.
   * @param event The click event from user picking media category.
   */
  handleImageChange = event => {
    this.setState({
      image: event.currentTarget.value,
      entry: 0,
    });
  };

  /**
   * Handles change of audio when selecting audio category.
   * @param event The click event from user picking media category.
   */
  handleAudioChange = event => {
    this.setState({
      audio: event.currentTarget.value,
      entry: 0,
    });
  };

  /**
   * Handles change of text when selecting text category.
   * @param event The click event from user picking media category.
   */
  handleTextChange = event => {
    this.setState({
      text: event.currentTarget.value,
      entry: 0,
    });
  };

  /**
   * Handles change of entry when a tab is clicked.
   * @param key The key for the selected element.
   */
  handleArtChange = key => {
    this.setState({
      entry: key,
    });
  };

  render() {
    return (
      <div className="gallery">
        <MediaPicker
          onImageChange={this.handleImageChange}
          onAudioChange={this.handleAudioChange}
          onTextChange={this.handleTextChange}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
        />

        <ArtPicker
          onChange={this.handleArtChange}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
          entry={this.state.entry}
        />

        <ArtDisplay
          entry={this.state.entry}
          selectedImage={this.state.image}
          selectedAudio={this.state.audio}
          selectedText={this.state.text}
        />
      </div>
    );
  }
}

export default Gallery;
