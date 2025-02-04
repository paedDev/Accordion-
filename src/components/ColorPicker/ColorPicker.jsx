import React, { useEffect, useState } from 'react'

const ColorPicker = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("gray")

    const randomGenerator = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleHexValues = () => {
        let hexVal = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor = hexColor + hexVal[randomGenerator(hexVal.length)]
            console.log(hexColor);

        }
        setColor(hexColor)
    }
    const handleRGBValues = () => {
        const R = randomGenerator(256)
        const G = randomGenerator(256)
        const B = randomGenerator(256)

        const result = (`rgb(${R},${G},${B})`)
        // setColor(`rgb(${r},${g},${b})`)
        setColor(result)
        console.log(result);



    }
    useEffect(() => {
        if (typeOfColor === "hex") {
            handleHexValues()
        } else {
            handleRGBValues()
        }
    }, [typeOfColor])
    const setHex = () => {
        setTypeOfColor("hex")
    }
    const setRgb = () => {
        setTypeOfColor("rgb")
    }
    return (
        <div className='min-h-screen w-4/5 m-auto p-20 mb-5' style={{ backgroundColor: color }}>
            <div>
                <div className='text-white flex items-center flex-col lg:flex-row justify-center lg:space-x-4 space-y-3 lg:space-y-0'>
                    <button className='bg-white text-black px-8 py-3 rounded-sm'
                        onClick={setHex} >Hex</button>
                    <button className='bg-white text-black px-8 py-3 rounded-sm' onClick={setRgb} >RGB</button>
                    <button className='bg-white text-black px-8 py-3 rounded-sm'
                        onClick={typeOfColor === "hex"
                            ? handleHexValues
                            : handleRGBValues}
                    > Generate Random Colors</button>
                </div>
                {/* values here */}
                <div className='flex items-center justify-center flex-col h-64 space-y-5'>
                    <h1 className='text-6xl'>{color}</h1>
                    <h2 className='text-2xl'>{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</h2>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker