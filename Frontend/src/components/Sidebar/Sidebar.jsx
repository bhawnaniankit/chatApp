import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from "./LogoutButton.jsx"

export const Sidebar = () => {
    return (
        <div className={` border-r md:w-auto border-slate-500 p-4 flex align-middle flex-col h-full`}>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}
