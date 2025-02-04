import React, { useEffect, useState } from 'react'
// 0 1 2
// 3 4 5
// 6 7 8



const TTT = () => {
    const [squares, setSquares] = useState(Array(9).fill(""))
    const [isXPresent, setisXPresent] = useState(true)
    const [status, setStatus] = useState('')
    const Square = ({ value, onClick }) => {
        return <button className='border border-red-400 w-20 h-20 flex flex-col justify-center items-center text-center' onClick={onClick}>
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
            const [x, y, z] = winningPattern[i]

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }

        }
        return null
    }
    const handleClick = (getCurrentSquare) => {
        let copySquares = [...squares]
        if (getWinner(copySquares) || copySquares[getCurrentSquare]) return
        copySquares[getCurrentSquare] = isXPresent ? "X" : "0"
        setisXPresent(!isXPresent)
        setSquares(copySquares)


    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== "")) {
            setSquares("This is a draw! Please restart the game")
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`)
        } else {
            setStatus(`Next player is ${isXPresent ? "X" : "0"}`)
        }
    }, [squares, isXPresent])

    const Restart = () => {
        setisXPresent(true)
        setSquares(Array(9).fill(""))
    }
    return (
        <>
            <div className="flex items-center justify-center mt-20 ">
                <div className="">
                    <Square onClick={() => handleClick(0)} value={squares[0]} />
                    <Square onClick={() => handleClick(1)} value={squares[1]} />
                    <Square onClick={() => handleClick(2)} value={squares[2]} />
                </div>
                <div className="">
                    <Square onClick={() => handleClick(3)} value={squares[3]} />
                    <Square onClick={() => handleClick(4)} value={squares[4]} />
                    <Square onClick={() => handleClick(5)} value={squares[5]} />
                </div>
                <div className="">
                    <Square onClick={() => handleClick(6)} value={squares[6]} />
                    <Square onClick={() => handleClick(7)} value={squares[7]} />
                    <Square onClick={() => handleClick(8)} value={squares[8]} />
                </div>



            </div>
            <div className="flex flex-col text-center mt-5 space-y-4 py-10">
                <h1>{status}</h1>
                <div className=''>
                    <button onClick={Restart} className='px-8 py-2 bg-green-400 text-green-700' >Restart</button>
                </div>

            </div >
        </>
    )
}

export default TTT