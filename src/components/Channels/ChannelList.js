import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Channel from './Channel'

class ChannelList extends Component {
    render() {
        return (
            <ul>
            {
                this.props.channels.map(c => {
                    return (<Channel 
                        channel={ c } 
                        key={c.id}
                        setChannel={ this.props.setChannel }
                        activeChannel= { this.props.activeChannel }
                    />)
                })
            }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired,
}

export default ChannelList
