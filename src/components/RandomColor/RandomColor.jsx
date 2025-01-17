import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfCOlor] = useState("hex")
    const [color, setColor] = useState("#000000")


    //length here is the length of the array of hex
    const generateRandomColor = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleCreateRandomHexColor = () => {
        //hex #124313
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", 'C', 'D', "E", "F"]
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandomColor(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor)

    }
    const handleCreateRandomRgbColor = () => {
        const r = generateRandomColor(256)
        const g = generateRandomColor(256)
        const b = generateRandomColor(256)

        setColor(`rgb(${r},${g},${b})`)
    }
    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()

    }, [typeOfColor])

    return (
        //container
        <div className='min-h-screen w-full text-white' style={{ backgroundColor: color }}  >

            <div className='space-x-12 py-6 flex justify-center '>
                <button className='px-8 py-3 bg-white text-black rounded-xl font-bold cursor-pointer' onClick={() => setTypeOfCOlor("hex")}>Create Hex Color</button>
                <button className='px-8 py-3 bg-gradient-to-r from-red-500 via-orange-300 to-yellow-300 text-black rounded-xl font-bold cursor-pointer' onClick={() => setTypeOfCOlor("rgb")}>Create RGB Color</button>
                <button className='px-8 py-3 bg-white text-black rounded-xl font-bold cursor-pointer'
                    onClick={typeOfColor === "hex" ?
                        handleCreateRandomHexColor :
                        handleCreateRandomRgbColor
                    }> Generate Random Color</button>
            </div>
            {/* result */}

            <div className='flex items-center justify-center py-40 text-6xl flex-col space-y-10'>
                <h3>{typeOfColor === "rgb" ? "RGB Color " : "Hex Color"} </h3>
                <h1>{color}</h1>
            </div>
        </div >

    )
}

export default RandomColor