import React, { Component } from 'react';
import ArtDisplayView from './ArtDisplayView';
import './ArtDisplay.css';

const Container = ({ children }) => (
  <div className="art-display">{children}</div>
);

class ArtDisplay extends Component {
  state = {
    // Whether or not new data is currently being loaded.
    loading: false,

    // Whether or not an error occured while loading data.
    error: false,

    // The currently visible image.
    image: null,

    // The currently visible text.
    text: null,
  };

  load = async () => {
    // Reset errors and notify the user that data is currently loading.
    this.setState({
      loading: true,
      error: false,
    });

    try {
      // Using this helper allows us to run both fetch calls in parallel.
      // Note that this throws if any of the two
      await Promise.all([this.loadImage(), this.loadText()]);
    } catch (error) {
      // Notify the user that an error happened.
      this.setState({
        error: true,
      });
    }

    // Remove the loading notification.
    this.setState({
      loading: false,
    });
  };

  loadImage = async () => {
    const response = await fetch('/images/flames/24143.svg');
    const data = await response.text();

    this.setState({
      image: data,
    });
  };

  loadText = async () => {
    const response = await fetch('/text/burning/flame.txt');
    const data = await response.text();

    this.setState({
      text: data,
    });
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.load();
    }
  }

  render() {
    if (this.state.error) {
      return (
        <Container>
          An error occurred while loading the data for this exhibition.
        </Container>
      );
    }

    if (this.state.loading) {
      return <Container>Loading</Container>;
    }

    return (
      <Container>
        <ArtDisplayView
          image={this.state.image}
          text={this.state.text}
          audio="/audio/weather/thunder.mp3"
        />
      </Container>
    );
  }
}

export default ArtDisplay;
