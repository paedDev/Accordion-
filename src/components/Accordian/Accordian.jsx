import React, { useState } from 'react'
import data from './data'
const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }
    return (
        <div className=' min-h-screen bg-200-500 mx-auto container'>
            <div className='w-3/4  m-auto space-y-4'>
                {

                    data.map((getData) => {
                        return (
                            <div key={getData.id} className=' bg-white-500  text-gray-500 rounded'>
                                <div className='flex justify-between  p-4 font-bold font-mono shadow-2xl cursor-pointer rounded-t-lg ' onClick={
                                    () => handleSingleSelection(getData.id)
                                }>

                                    <h3 className=''>{getData.question}</h3>
                                    <span className='inline-block'>{selected === getData.id ? "-" : "+"}</span>
                                </div>

                                <div className='bg-gray-300 rounded-b-lg'>
                                    {selected === getData.id ? <div className='p-4 text-sm '>{getData.answer}</div> : null}

                                </div>
                            </div>
                        )
                    })







                }
            </div>
        </div >
    )
}

export default Accordian