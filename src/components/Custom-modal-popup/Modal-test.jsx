import React, { useState } from 'react'
import Modal from './modal'
const ModalTest = () => {
    const [showModelPopUP, setshowModelPopUP] = useState(false)

    const handleToggleModalPopUp = () => {
        setshowModelPopUP(!showModelPopUP)
    }

    const onClose = () => {
        setshowModelPopUP(false)
    }
    return (
        <div className='flex justify-center py-5'>
            <button className='  bg-green-300 px-4 py-2 rounded text-white ' onClick={handleToggleModalPopUp}>Open Model Pop up</button>
            {
                showModelPopUP && <Modal onClose={onClose} body={<div>
                    Customized Body
                </div>} />
            }
        </div>
    )
}

export default ModalTest