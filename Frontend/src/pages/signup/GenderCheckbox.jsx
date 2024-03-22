import React from 'react'

const GenderCheckbox = ({ formData, setFormData }) => {
    return (
        <div className='flex '>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span>Male</span>
                    <input type="checkbox" className='checkbox border-slate-900' onChange={() => { setFormData({ ...formData, gender: "male" }) }} />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Female</span>
                    <input type="checkbox" className='checkbox border-slate-900' onChange={() => { setFormData({ ...formData, gender: "female" }) }} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox