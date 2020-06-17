import React, { Component } from 'react';
import './App.css';

import ChannelSection from './components/Channels/ChannelSection'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      channels: []
    }
  }

  addChannel(name) {
    let { channels } = this.state
    channels.push({
      id: channels.length, name
    })
    this.setState({channels})
  }

  setChannel(activeChannel) {
    this.setState({activeChannel})
  }

  render() {
    return (
      <ChannelSection
        channels={ this.state.channels }
        addChannel={ this.addChannel.bind(this) }
        setChannel={ this.setChannel.bind(this) }
      />
    )
  }
}

export default App;
