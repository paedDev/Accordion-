import React, { useEffect, useState } from 'react'
import CardUser from './CardUser'

const Index = () => {
    const [userName, setUserName] = useState("paedDev")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState(null)

    async function profileFinder() {
        try {
            setLoading(true)
            const res = await fetch(`https://api.github.com/users/${userName}`)
            const data = await res.json()
            console.log(data);
            if (data) {
                setUserData(data)
                setLoading(false)
                setUserName("")

            } else {
                setErrMsg(data.message)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
            setErrMsg(error)

        }

    }

    useEffect(() => {
        profileFinder()
    }, [])
    if (loading) {
        return <div>Please Wait for it to load</div>
    }

    const handleSubmit = () => {
        profileFinder()
    }
    return (
        <>
            <div className='min-h-screen lg:w-4/5 w-3/4 m-auto pt-10 space-y-10'>
                <div className='flex justify-center items-center flex-col '>
                    <div className=''>
                        <input type="text" placeholder='Input a Github Username...' onChange={(e) => setUserName(e.target.value)} className='bg-gray-200 px-8 py-3 rounded-l-xl outline-none placeholder:text-gray-400' />

                        <button onClick={handleSubmit} className='px-8 py-3 rounded-r-xl bg-gray-200 hover:bg-gray-700 hover:text-white transtion duration-500'>Submit</button>
                    </div>


                </div>
                <div>
                    {
                        userData !== null ? <CardUser user={userData} /> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Index