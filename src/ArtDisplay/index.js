import React, {Component} from 'react';
import ArtDisplayView from './ArtDisplayView';

class ArtDisplay extends Component {
    state = {
        image: null,
        text: null,
    };

    load = async () => {
      this.loadImage();
      this.loadText();
    };

    loadImage = async () => {
        const response = await fetch('/images/flames/24143.svg');
        const data = await response.text();
        this.setState({
            image: data
        })
    };

    loadText = async () => {
        const response = await fetch('/text/burning/flame.txt');
        const data = await response.text();
        this.setState({
            text: data
        })
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
        return (
            <ArtDisplayView
                image={this.state.image}
                text={this.state.text}
                audio={"/audio/weather/thunder.mp3"}
            />
        )
    }
}

export default ArtDisplay;
