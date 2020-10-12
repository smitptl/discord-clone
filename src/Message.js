import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>smitpatel
                    <span className="message_timestamp"> this is timestamp
                    </span>
                </h4>
                <p>This is message</p>
            </div>
        </div>
    )
}

export default Message
