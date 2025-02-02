import React, { useEffect, useState } from 'react'
import Suggestion from './Suggestion'

const SearchAuto = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [errorMsgm, setErrorMsg] = useState(null)
    const [serachParam, setSearchParam] = useState("")
    const [showNameDropDown, setShowNameDropDown] = useState(false)
    const [filteredUser, setFilteredUser] = useState("")

    async function fetchListOfUsers() {
        try {
            setLoading(true)
            const res = await fetch('https://dummyjson.com/users')
            const data = await res.json()

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setErrorMsg(null)
            }

        }
        catch (err) {
            console.log(err);
            setLoading(false)
            setErrorMsg(err)

        }

    }
    const handleClick = (e) => {
        console.log(e.target.value);
        setShowNameDropDown(false)
        setSearchParam(e.target.innerText)
        setFilteredUser([])

    }


    useEffect(() => {
        fetchListOfUsers()
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
    return (
        <div>
            {
                loading ? <h2>Loading Data ! Please Wait</h2> : <div>
                    <input value={serachParam} type="text" name='search-users' placeholder='Search Users here...' onChange={handleChange} />

                    {
                        showNameDropDown && <Suggestion handleClick={handleClick} data={filteredUser} />
                    }
                </div>
            }

        </div>
    )
}

export default SearchAuto