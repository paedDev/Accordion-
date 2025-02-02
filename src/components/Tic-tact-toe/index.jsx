import React, { useEffect, useState } from 'react'
// 0 1 2
// 3 4 5
// 6 7 8
const Index = () => {
    const [squares, setSquares] = useState(Array(9).fill(""))
    const [isXTurn, setisXTurn] = useState(true)
    const [status, setStatus] = useState("")
    const Square = ({ value, onClick }) => {
        return <button className={`w-20 h-20 border border-red-900 flex flex-col justify-center items-center text-4xl transition duration-500 ${value === "X" ? "text-black-400" : value === "0" ? "text-red-500" : ""} `} onClick={onClick} >
            {value}
        </button>
    }


    const getWinner = (squares) => {
        const winningPattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ]
        for (let i = 0; i < winningPattern.length; i++) {
            const [x, y, z] = winningPattern[i];

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }

        }
        return null
    }


    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== "")) {
            setStatus("This is a draw! Please restart the game")
        } else if (getWinner(squares)) {
            setStatus(`The winner is ${getWinner(squares)}. Please restart the game`)
        } else {
            setStatus(`Next player is ${isXTurn ? "X" : "0"} `)
        }



    }, [squares, isXTurn])

    const handleClick = (getCurrentSquare) => {
        let copySquares = [...squares];
        if (getWinner(copySquares) || copySquares[getCurrentSquare]) return
        copySquares[getCurrentSquare] = isXTurn ? "X" : "0"
        setisXTurn(!isXTurn)
        setSquares(copySquares)
    }
    console.log(squares);

    return (
        <>
            <div className='flex justify-center mt-20 items-center'>
                {/* row */}
                <div>
                    <Square value={squares[0]} onClick={() => handleClick(0)} />
                    <Square value={squares[1]} onClick={() => handleClick(1)} />
                    <Square value={squares[2]} onClick={() => handleClick(2)} />
                </div>
                {/* row */}
                <div>
                    <Square value={squares[3]} onClick={() => handleClick(3)} />
                    <Square value={squares[4]} onClick={() => handleClick(4)} />
                    <Square value={squares[5]} onClick={() => handleClick(5)} />
                </div>
                {/* row */}
                <div>
                    <Square value={squares[6]} onClick={() => handleClick(6)} />
                    <Square value={squares[7]} onClick={() => handleClick(7)} />
                    <Square value={squares[8]} onClick={() => handleClick(8)} />
                </div>
            </div>
            <div className='text-center space-y-4 mt-2'>
                <h1>{status}</h1>
                <div className=''>
                    <button className='px-3 py-1 rounded text-sm bg-green-400 text-green-700' onClick={() => {
                        setSquares(Array(9).fill(""))
                        setisXTurn(true)
                        setStatus("Next player is X");
                    }}>Restart</button>
                </div>
            </div>
        </>
    )
}

export default Index