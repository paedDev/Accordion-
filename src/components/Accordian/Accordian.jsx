import React, { useState } from 'react'
import data from './data'
//single selection
//multiple selections
const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {

        setSelected(getCurrentId === selected ? null : getCurrentId)
        console.log(getCurrentId);
    }
    const handleMultiSelection = (getCurrentId) => {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple)
        console.log(selected, multiple);


    }
    return (
        <div className='container mx-auto bg-gray-100 p-6 rounded-lg min-h-screen flex justify-center items-center flex-col'>
            <div>
                <button className='bg-yellow-900 text-white font-bold p-4 rounded-xl cursor-pointer' onClick={() => setEnableMultiSelect(!enableMultiSelect)}> Enable Multi Selection</button>
            </div>
            <div className='w-3/4 m-auto p-6 rounded space-y-6 font-mono'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem =>
                            <div key={dataItem.id} className='bg-yellow-900 rounded-lg shadow-xl'>
                                <div
                                    onClick={enableMultiSelect ?
                                        () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                    } className='flex justify-between  p-6 font-bold text-white cursor-pointer '>

                                    <h3>{dataItem.question}</h3>
                                    <span className=''>{selected === dataItem.id ? '-' : '+'}</span>
                                </div>
                                <div className=''>
                                    {
                                        enableMultiSelect ?
                                            multiple.indexOf(dataItem.id) !== -1 &&
                                            <div className='text-white text-left px-6 py-4 '>{dataItem.answer}</div> :
                                            selected === dataItem.id && <div className='text-white text-left px-6 py-4 '>{dataItem.answer}</div>

                                    }
                                </div>
                            </div>

                        )
                        : <div>no data found</div>
                }
            </div>
        </div >
    )
}

export default Accordian