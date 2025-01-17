import React, { useEffect, useState } from 'react'

function RC() {
    const [color, setColor] = useState('#000000')
    const [typeOfColor, setTypeOfColor] = useState("hex")

    const generateRandomColor = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleCreateHexNumber = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomColor(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor)

    }
    const handleCreateRgbNumber = () => {
        const r = generateRandomColor(256)
        const g = generateRandomColor(256)
        const b = generateRandomColor(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if (typeOfColor === "hex") handleCreateHexNumber()
        else handleCreateRgbNumber()
    }, [typeOfColor])
    return (
        <div className='w-full min-h-screen text-white ' style={{ backgroundColor: color }} >
            <div className='flex flex-col lg:flex-row justify-center lg:space-x-12 py-12 items-center space-y-4 lg:space-y-0 '>
                <button className='px-8 py-3 bg-white text-black rounded font-bold' onClick={() => setTypeOfColor("hex")}>Create Hex Values</button>
                <button className='px-8 py-3 bg-white text-black rounded font-bold' onClick={() => setTypeOfColor("rgb")}>Create RGB Values</button>
                <button className='px-8 py-3 bg-white text-black rounded font-bold'
                    onClick={
                        typeOfColor === "hex" ? handleCreateHexNumber : handleCreateRgbNumber
                    }>Generate Random Color</button>
            </div>
            {/* results */}
            <div className='flex flex-col items-center justify-center lg:py-40 space-y-4'>
                <h3 className="font-bold text-6xl">{typeOfColor === "hex" ? "Hex Color" : "RGB Color"}</h3>
                <h1 className="font-bold text-4xl">{color}</h1>
            </div>
        </div>

    )
}

export default RC