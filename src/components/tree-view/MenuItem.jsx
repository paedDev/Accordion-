import React, { useState } from 'react'
import MenuList from './MenuList'
import { FaMinus, FaPlus } from "react-icons/fa"
const MenuItem = ({ item }) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentChildren({ ...displayCurrentChildren, [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel] })
    }
    console.log(displayCurrentChildren);

    return (
        <li className='ml-4 p-2 '>
            <div className='flex items-center gap-4 cursor-pointer'>

                <p className='text-white p-1 mb-2 '>{item.label}</p>
                {
                    item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                        {

                            displayCurrentChildren[item.label] ? <FaMinus className='text-white' /> : <FaPlus className='text-white' />
                        }

                    </span> : null
                }

            </div>

            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem