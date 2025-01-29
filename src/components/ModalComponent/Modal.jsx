import React from 'react'

const Modal = ({ id, header, body, footer, onClose }) => {


    return (
        <div className=' fixed left-0 top-0 z-10 w-full pt-20 min-h-screen bg-green-100'>
            <div id={id || "Modal"} className='m-auto bg-white  w-4/5 text-center   animate-slideFromTop text-white ' >
                <div className='bg-sky-300 h-16 relative flex items-center justify-center'>
                    <span className='absolute right-3 text-4xl top-0 cursor-pointer'
                        onClick={onClose}>&times;</span>
                    {/* header */}
                    <h3>{header ? header : "header"}</h3>
                </div>

                {/* body */}
                <div className='bg-orange-300 h-64 flex items-center justify-center'>
                    {body ? body : "body"}
                </div>

                {/* footer */}
                <div className='bg-blue-300 h-16 flex items-center justify-center'>
                    {footer ? footer : "footer"}
                </div>

            </div>
        </div>
    )
}

export default Modal