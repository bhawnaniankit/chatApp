import React from 'react'
import { Sidebar } from '../../components/Sidebar/Sidebar';
import MessageContainer from "../../components/messages/MessageContainer.jsx"
import { Header } from '../../components/header.jsx';

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div>
                <Header></Header>
                <Sidebar />

                {/* <div>
                </div> */}
            </div>
            <MessageContainer />
        </div>
    )
}

export default Home;