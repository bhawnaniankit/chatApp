import React from 'react'

const Conversation = () => {
    return (<>
        <div className='flex gap-2 p-2 py-1 cursor-pointer items-center hover:bg-sky-500 rounded'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user avatar" />
                </div>
            </div>
            <div className={`hidden sm:block flex flex-col flex-1`}>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200 '>Abhay</p>
                    <span className='text-x1'> 💻</span>
                </div>
            </div>
        </div>

        <div className='divbar my-0 py-0 h-1' />
    </>
    )
}

export default Conversation