// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleClick = () => {
        this.setState(prev => {
            return {
                settings: {...prev.settings,
                    bitrate: 12
                }
            }
        })
    }

    handleResolutionClick = () => {
        this.setState(prev => {
            return {
                settings: { ...prev.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate'
                onClick={this.handleClick}></button>
                <button className='resolution' onClick={this.handleResolutionClick}></button>
            </div>
        )
    }
}

export default YouTubeDebugger;