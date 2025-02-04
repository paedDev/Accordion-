import React from 'react'

const Modal = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || "Modal"} className='w-full min-h-full fixed top-50 left-0 z-10 py-20 overflow-auto '>
            <div className='relative w-4/5 border m-auto  bg-gray-100'>
                {/* //header */}
                <div className='bg-red-400 py-5 text-center'>
                    <span className='absolute right-3 top-0 text-xl font-bold cursor-pointer' onClick={onClose}>&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div >
                {/* //body */}
                <div className='bg-sky-400 py-20 text-center'>
                    <h2>{body ? body : "body"}</h2>
                </div>
                {/* //footer */}
                <div className='bg-pink-400 py-5 text-center'>
                    <h2>{footer ? footer : "footer"}</h2>
                </div>
            </div>
        </div>
    )
}

export default Modal