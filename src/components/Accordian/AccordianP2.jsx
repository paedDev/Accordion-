import React, { useState } from 'react'
import data from './data'
const AccordianP2 = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelect, setEnableMultiSelect] = useState(false)
    const [multiple, setMultiple] = useState([])

    const handleSingleSelect = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)
        console.log(getCurrentId);

    }
    const handleMultipleSelect = (getCurrentId) => {
        const updatedMultiple = multiple.includes(getCurrentId)
            ? multiple.filter((id) => id !== getCurrentId)
            : [...multiple, getCurrentId];
        setMultiple(updatedMultiple);
    };
    const handleEnableMultipleSelect = () => {
        setEnableMultiSelect(!enableMultiSelect)
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-300 py-20 flex-col space-y-4'>
            <button className='bg-gray-400 p-4 text-gray-200 rounded'
                onClick={
                    handleEnableMultipleSelect
                }>{enableMultiSelect ? "Disable Multi Select" : "Enable Multi Select"}</button>
            <div className='space-y-4 w-3/4'>

                {data && data.length ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id}>
                            <div
                                className='flex justify-between p-4 bg-gray-700 shadow-xl w-full text-white'
                                onClick={
                                    enableMultiSelect
                                        ? () => handleMultipleSelect(dataItem.id)
                                        : () => handleSingleSelect(dataItem.id)
                                }
                            >
                                <h1>{dataItem.question}</h1>
                                <span>{selected === dataItem.id ? '-' : '+'}</span>
                            </div>
                            <div>
                                {enableMultiSelect
                                    ? multiple.includes(dataItem.id) && (
                                        <div className='p-3 px-6'>{dataItem.answer}</div>
                                    )
                                    : selected === dataItem.id && (
                                        <div className='p-3 px-6'>{dataItem.answer}</div>
                                    )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data is present</div>
                )}
            </div>
        </div >
    )
}

export default AccordianP2