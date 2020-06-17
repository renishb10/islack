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
}

export default ChannelList
