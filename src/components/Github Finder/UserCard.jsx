import React from 'react'

const UserCard = ({ user }) => {

    let { avatar_url, followers, following, public_repos, location, name, login, created_at } = user

    const createdDate = new Date(created_at)
    // const  = () => {
    //     let created = new Date(created_at).getDate();
    //     created.toLocaleString(`en-us`, {
    //         month: "short"
    //     })
    //     created.getFullYear()

    // }

    return (
        <div className='p-4 rounded-xl shadow-xl '>
            <div className=''>
                <div className='flex justify-center flex-1'>
                    <img src={avatar_url} className='rounded-full h-52 mb-10 ' alt={"User"} />
                </div>
                <div className='flex justify-center mb-4 space-x-5 items-center'>
                    <a href={`https://github.com/${login}`} className='font-bold lg:text-xl '>{name || login || "Not available"}</a>
                    <p className='m-0 lg:text-xl text-sm font-bold text-gray-500 '>{`User joined on ${createdDate.getDate()} ${createdDate.toLocaleString(`en-us`, { month: "long" })} ${createdDate.getFullYear()}`}</p>
                </div>
            </div>

            <div className='flex  flex-col justify-center items-center space-y-5' >
                <div className='flex space-x-4 text-sm lg:text-lg'>
                    <p className='text-gray-800 font-semibold'>Location</p>
                    <p className='text-gray-500'>{location || "Not available"}</p>
                </div>
                <div className='flex space-x-4 text-sm lg:text-lg'>
                    <p className='text-gray-800 font-semibold'>Public Repos</p>
                    <p className='text-gray-500'>{public_repos || "Not available"}</p>
                </div>
                <div className='flex space-x-4 text-sm lg:text-lg'>
                    <p className='text-gray-800 font-semibold'>Followers</p>
                    <p className='text-gray-500'>{followers}</p>
                </div>
                <div className='flex space-x-4 text-sm lg:text-lg'>
                    <p className='text-gray-800 font-semibold'>Following</p>
                    <p className='text-gray-500'>{following || "Not available"}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard