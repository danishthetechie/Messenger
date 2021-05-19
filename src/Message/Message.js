import { Avatar, Card, CardHeader } from '@material-ui/core'
import React, { forwardRef } from 'react';
import './Message.css'

    const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username; 
    const firstChar = message.username[0];
    return (
        <div ref={ref} className={`Msg_card ${isUser && 'Msg_user'}`}>
            <Card className={isUser ? "Message_own" : "Message_guest"}>
                <CardHeader
                avatar={
                <Avatar>{firstChar}</Avatar>
                }
                title={message.message}
                subheader={isUser ? "You" : message.username || 'Unknown'}
                />
            </Card>

    </div>
    )
})

export default Message
