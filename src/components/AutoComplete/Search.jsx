import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'

const Search = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(null)
    const [searchParam, setSearchParam] = useState("")
    const [showNameDropDown, setShowNameDropDown] = useState(false)
    const [filteredUser, setFilteredUser] = useState("")

    async function fetchUser() {
        try {
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setErrMsg(null)
            }
        } catch (err) {
            setLoading(false)
            console.log(err);
            setErrMsg(err)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])


    const handleChange = (e) => {
        const query = e.target.value.toLowerCase()
        setSearchParam(query)
        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter((item) => item.toLowerCase().indexOf(query) > -1) : []
            setFilteredUser(filteredData)
            setShowNameDropDown(true)
        } else {
            setShowNameDropDown(false)
        }


    }
    console.log(users, filteredUser);

    const handleClick = (e) => {
        console.log(e.target.innerText);
        setShowNameDropDown(false)
        setSearchParam(e.target.innerText);
        setFilteredUser([])

    }

    return (
        <div className='p-20'>

            {
                loading ? <h1>Please Wait .. Data is loading</h1> : <div>
                    <input type="text" value={searchParam} placeholder='Search a name...' name='search-name' onChange={handleChange} />

                    {
                        showNameDropDown && <Suggestions handleClick={handleClick} data={filteredUser} />
                    }
                </div>
            }


        </div>
    )
}

export default Search