
import data from './data'
import React, { useState } from 'react'

const Acc = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (getCurrentId) => {
        console.log(getCurrentId);

        setSelected(getCurrentId === selected ? null : getCurrentId)

    }
    const handleMultiSelection = (getCurrentId) => {
        let copyMultiple = [...multiple]
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);

        {
            findIndexOfCurrentId === -1 ? copyMultiple.push(getCurrentId)
                : copyMultiple.splice(findIndexOfCurrentId, 1)
            setMultiple(copyMultiple)
            console.log(selected, multiple);

        }
    }
    const handleEnableMultipleSelect = () => {
        setEnableMultiSelect(!enableMultiSelect)
    }

    return (
        <div className='bg-gray-300 container mx-auto min-h-screen flex flex-col items-center justify-center'>
            <div>
                <button className='bg-gray-500 text-white px-6 py-4 rounded-xl font-bold'
                    onClick={() => handleEnableMultipleSelect()}>Enable Multi Select</button>
            </div>
            <div className='p-6 space-y-10 w-3/4'>
                {
                    data && data.length ?
                        data.map(dataItem =>
                            <div key={dataItem.id} className='bg-gray-500 text-white rounded-xl'>
                                <div className='flex justify-between  p-4  font-bold font-mono shadow-2xl cursor-pointer rounded-b-xl' onClick=
                                    {
                                        enableMultiSelect ?
                                            () => handleMultiSelection(dataItem.id)
                                            : () => handleSingleSelection(dataItem.id)
                                    }>
                                    <h3>{dataItem.question}</h3>
                                    <span>{selected === dataItem.id ? '-' : "+"}</span>
                                </div>
                                <div className='text-left bg-gray-100 text-black rounded-b-xl'>
                                    {
                                        enableMultiSelect ?
                                            multiple.indexOf(dataItem.id) !== -1 &&
                                            <div className='p-3 px-6'>
                                                {dataItem.answer}
                                            </div> :
                                            selected === dataItem.id && <div className='p-3 px-6'>
                                                {dataItem.answer}
                                            </div>


                                    }
                                </div>
                            </div>
                        )
                        : <div>No data is present</div>
                }
            </div>

        </div >
    )
}

export default Acc