import React from 'react'
import GenderCheckbox from "./GenderCheckbox.jsx"
import { Header } from '../../components/header.jsx'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
    return (
        <div className='w-3/4 flex-col h-full sm:h-screen flex items-center justify-between mx-auto'>
            <Header></Header>
            <div className='flex w-full flex-col flex-1 max-w-[730px] mx-auto justify-center'>
                <div className='fex items-center justify-center '>
                    <div className='w-full mt-12 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                        <h1 className='text-2xl sm:text-3xl transition-all font-semibold text-center text-gray-300'>
                            Signup
                            <span className='text-blue-500'>ChatApp</span>
                        </h1>
                        <form action="">
                            <div className=''>
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Fullname</span>
                                </label>
                                <input type="text" className='w-full input input-bordered h-10' placeholder='Enter Fullname' name="" id="" />
                            </div>
                            <div className=''>
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Username</span>
                                </label>
                                <input type="text" className='w-full input input-bordered h-10' placeholder='Enter Username' name="" id="" />
                            </div>

                            <div>
                                <div    >
                                    <label className='label p-2'>
                                        <span className='text-base label-text'>Password</span>
                                    </label>
                                    <input type="password" className='w-full input input-bordered h-10' placeholder='Enter Password' name="" id="" />
                                </div>
                            </div>
                            <div>
                                <div    >
                                    <label className='label p-2'>
                                        <span className='text-base label-text'>Confirm Password</span>
                                    </label>
                                    <input type="password" className='w-full input input-bordered h-10' placeholder='Confirm  Password' name="" id="" />
                                </div>
                            </div>
                            <GenderCheckbox />
                            <p onClick={() => { navigate("/login") }} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                                Already have an account?
                            </p>
                            <div>
                                <button className='btn btn-block btn-sm mt-2'>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;