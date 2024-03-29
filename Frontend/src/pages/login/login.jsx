import React from 'react'
import { Header } from '../../components/header';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className=' w-screen items-center justify-between flex-col h-screen flex'>
            <Header></Header>
            <div className='flex flex-1 items-center'>
                <div className='flex flex-col my-auto items-center justify-center mx-auto'>
                    <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                        <h1 className='text-3xl font-semibold text-center text-gray-300'>
                            Login
                            <span className='text-blue-500'>ChatApp</span>
                        </h1>
                        <form action="">
                            <div className=''>
                                <label className='label p-2'>
                                    <span className='text-base label-text'>Username</span>
                                </label>
                                <input type="text" className='w-full input input-bordered h-10' placeholder='Enter Username' name="" id="" />
                            </div>

                            <div>
                                <div className=''>
                                    <label className='label p-2'>
                                        <span className='text-base label-text'>Password</span>
                                    </label>
                                    <input type="password" className='w-full input input-bordered h-10' placeholder='Enter Password' name="" id="" />
                                </div>
                            </div>
                            <p onClick={() => {
                                navigate("/signup")
                            }} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                                {"Don't"} have an account?
                            </p>
                            <div>
                                <button className='btn btn-block btn-sm mt-2'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;