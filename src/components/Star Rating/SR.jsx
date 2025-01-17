import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
const SR = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);

    }
    const handleMouseMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);

    }
    const handleMouseLeave = () => {
        setHover(rating);
    }
    const handleRemoveStar = () => {
        setRating(0)
        console.log(`This is handle remove${setRating}`);

    }
    return (
        <div>
            <div className='flex justify-center space-x-2'>
                {
                    [...Array(noOfStars)].map((_, index) => {
                        index += 1
                        return <FaStar
                            key={index}
                            className={index <= (hover || rating)
                                ? `${`text-yellow-600`}`
                                : `${`text-black`}`
                            }

                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            size={40}



                        />


                    })

                }

            </div>


        </div>
    )
}

export default SR