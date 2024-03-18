import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
    return (
        <div className='py-2 h-full flex flex-col overflow-auto'>
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    )
}

export default Conversations