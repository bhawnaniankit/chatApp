import React from 'react'

const MessageContainer = () => {
    return (
        <div className={` transition-all sm:block sm:min-w-[270px] flex-1 md:min-w-[400px] flex flex-col`}>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span>{" "}
                <span className='text-gray-900 font-bold'>Abhay</span>
            </div>
        </div>
    )
}

export default MessageContainer