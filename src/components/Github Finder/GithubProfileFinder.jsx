import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
const GithubProfileFinder = () => {
    const [userName, setUserName] = useState("paedDev")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = () => {
        fetchGithubUserData()
    }
    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json()
        console.log(data);
        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName("")
        }


    }
    useEffect(() => {
        fetchGithubUserData()
    }, [])

    if (loading) {
        return <h1>Loading data ! Please wait</h1>
    }
    return (
        <div className='mx-auto w-4/5 sm:w-3/4 p-10 rounded-sm '>
            <div className='flex gap-5 justify-center items-center mb-10'>
                <input type="text" className='px-8 py-3 border-none lg:text-xl' name='search-by-uername' placeholder='Search Github username... ' value={userName} onChange={(e) => setUserName(e.target.value)} />
                <button onClick={handleSubmit} className='px-8 py-3 bg-black text-white cursor-pointer'>Search</button>
            </div>

            {
                userData !== null ? <UserCard user={userData} /> : null

            }
        </div>
    )
}

export default GithubProfileFinder