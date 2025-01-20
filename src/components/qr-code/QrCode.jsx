import React, { useState } from 'react'
import QRCode from "react-qr-code"
const QrCode = () => {
    const [inputVal, setInputVal] = useState("")
    const [qrCode, setQrCode] = useState("")

    const getInputVal = (e) => {
        const input = e.target.value.trim()
        if (input !== "")
            setInputVal(input)
        console.log(input);

    }
    const handleGenerateQrCode = () => {
        setQrCode(inputVal)
        setInputVal("")
    }
    return (

        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-green-200 flex flex-col justify-center space-y-8 p-10 rounded-xl text-center items-center'>
                <h1 className='text-4xl font-bold'>Qr Code Generator</h1>
                <div>
                    <input type="text" placeholder='Input a value here' className='p-3 rounded-l-xl' onChange={getInputVal} value={inputVal} />
                    <button className='p-3 rounded-r-xl bg-green-600 text-green-200'
                        onClick={
                            handleGenerateQrCode
                        }>Generate</button>
                </div>
                <div>
                    <QRCode bgColor='white' value={qrCode} />
                </div>
            </div>


        </div>
    )
}

export default QrCode