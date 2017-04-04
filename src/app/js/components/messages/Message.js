/**
 * MessageView
 *
 * Renders a single message
 *
 * @property {Object} message
 */

import React from 'react'

import MessageView from './MessageView'

const Message = ({message}) =>
    <div className={`message ${message.right ? 'message-right' : ''}`}>
        <div className="message-sidebar" style={{backgroundColor: message.color}}></div>
        <div className="message-text">
            <span className="message-text-title">Event:</span>
            <span className="message-text-content">{message.eventName}</span>
            <span className="message-text-date">{formatDate(message.timestamp)}</span>
        </div>
        <div className="message-text">
            <span className="message-text-title">Type:</span>
            <span className="message-text-content">{message.isJson ? 'JSON' : message.messageType}</span>
        </div>
        <MessageView message={message} />
    </div>

export default Message

function formatDate (date) {
    return new Date(date).toLocaleTimeString()
}
