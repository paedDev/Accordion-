import React, { useState } from 'react'
import Modal from './Modal'
import LightToDark from '../LDM/LightToDark'
const ModalTest = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleModalPopUp = () => {

        setIsOpen(!isOpen)
        console.log(isOpen);

    }
    const onClose = () => {
        setIsOpen(false)
    }
    return (

        <div className='flex justify-center flex-col py-5'>
            {
                <LightToDark />
            }
            <button onClick={handleModalPopUp} className='bg-green-500 px-8 py-3 text-white rounded'>Modal Pop Up</button>
            {/* show the content of the child */}
            {
                isOpen && <Modal onClose={onClose}
                    body={
                        <div>
                            Replaced the Body content
                        </div>} />
            }
        </div>
    )
}

export default ModalTest