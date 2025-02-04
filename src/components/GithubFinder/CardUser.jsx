import React from 'react'

const CardUser = ({ user }) => {
    const { avatar_url, followers, following, public_repos, location, name, login, created_at } = user
    const createdDate = new Date(created_at)
    return (
        <div className=' space-y-6 bg-gray-200 p-10 rounded-lg flex justify-center flex-col items-center'>
            <div>
                <img src={avatar_url} alt={"User"} className='rounded-full w-48 h-48' />
            </div>
            <div>
                <a href={`https://github.com/${login}`} className=''>{name || login}</a>
                <p className='text-gray-400'>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString(`en-us`, {
                    month: "short"
                })} ${createdDate.getFullYear()}`}</p>
            </div>
            <div className='text-center space-y-2 text-gray-500'>
                <div>
                    <p>Public Repos</p>
                    <p>{public_repos}</p>

                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
                <div>
                    <p>Location</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default CardUser