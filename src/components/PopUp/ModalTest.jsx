import React, { useState } from 'react'
import Modal from './Modal'
const ModalTest = () => {
    //parent
    const [showModalPopUp, setShowModalPopUP] = useState(false)

    const handleModalPopUp = () => {
        setShowModalPopUP(true)
    }
    function onClose() {
        setShowModalPopUP(false)
    }
    return (
        <div className='flex justify-center py-5'>
            <button className='px-8 py-3 bg-gray-400 text-white' onClick={handleModalPopUp}>Open Modal Pop Up</button>
            {
                showModalPopUp && <Modal body={<div>Customized the body</div>} onClose={onClose} />
            }
        </div>
    )
}

export default ModalTest