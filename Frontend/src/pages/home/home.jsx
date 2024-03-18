import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import MessageContainer from "../../components/messages/MessageContainer.jsx"
import { Header } from '../../components/header.jsx';

const Home = () => {
    return (
        <div className=' h-screen flex flex-col items-center justify-between overflow-hidden'>
            <Header></Header>
            <div className=' h-3/4 lg:w-3/4 mb-12 my-auto flex rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    )
}

export default Home;