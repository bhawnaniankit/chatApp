import React from 'react'
import GenderCheckbox from "./GenderCheckbox.jsx"

const Signup = () => {
    return (
        <div className='fex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
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
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Signup</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;