import React from 'react'

const Suggestions = ({ data, handleClick }) => {
    return (
        <div>
            <div>
                {
                    data && data.length ?
                        data.map((dataItem, index) =>
                            <li key={index} className='list-none' onClick={handleClick}>
                                {dataItem}
                            </li>)



                        : null
                }
            </div>
        </div>
    )
}

export default Suggestions