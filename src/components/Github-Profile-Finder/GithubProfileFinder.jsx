import React, { useEffect, useState } from 'react'
import Card from './Card'
const GithubProfileFinder = () => {
    const [userName, setUserName] = useState("paedDev")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

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
        return <div>Please Wait for it to load</div>
    }
    return (

        <div className='w-4/5 bg-gray-100 m-auto p-6'>
            <div className='flex gap-5 flex-col items-center justify-center  '>
                <div className='space-y-5'>
                    <input type="text" className='p-4 py-4 mr-4' name='searchByUsername' placeholder='Input a Github Username' value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                    <button onClick={handleSubmit} className='px-8 py-4 bg-gray-500 text-white rounded'>Search</button>
                </div>


                {
                    userData !== null ? <Card user={userName} /> : null

                }
            </div>
        </div>
    )
}

export default GithubProfileFinder