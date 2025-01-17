import React from 'react'
import MenuList from './MenuList'
const TreeView = ({ menus = [] }) => {
    return (
        <div className='min-h-screen w-64 bg-blue-600 flex py-6'>
            <MenuList list={menus} />
        </div>
    )
}

export default TreeView