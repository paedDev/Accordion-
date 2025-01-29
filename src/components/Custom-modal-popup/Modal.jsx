import React from 'react'

const Modal = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || "Modal"} className='fixed left-0 top-0 z-10 w-full pt-20 min-h-screen bg-green-100 '>
            {/* contetnt */}
            <div className='relative bg-white m-auto p- border-1 border-red-50 w-4/5 text-center animate-slideFromTop '>
                {/* header */}
                <div className='bg-red-200 px-1 py-4 relative font-bold text-white'>
                    <span onClick={onClose} className='cursor-pointer text-4xl font-bold  w-full text-right absolute top-0 right-0'>&times;</span>
                    <h3>{header ? header : "Header"}</h3>
                </div>
                <div className='bg-yellow-500 px-1 py-4 h-64 font-bold text-white'>
                    {
                        body ? body :
                            <div>
                                <p>This is our Modal Body</p>
                            </div>
                    }
                </div>
                <div className='bg-red-500 px-1 py-4 font-bold text-white'>
                    {
                        footer ? footer :
                            <div>
                                <p>Footer</p>
                            </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default Modal