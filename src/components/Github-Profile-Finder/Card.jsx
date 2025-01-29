import React from 'react'

const Card = ({ user }) => {
    const { avatar_url, followers, following, public_repos, location, name, login, created_at } = user;
    const createdDate = new Date(created_at);
    return (
        <div className=''>
            <div>
                <img src={avatar_url} alt={"User"} className='rounded-full' />
            </div>
            <div>
                <a href={`https://github.com/${login}`}>{name || login}</a>
                <p>User Joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString(`en-us`, {
                    month: "short"
                })} ${createdDate.getFullYear()}`}</p>
            </div>

            <div className=''>
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

export default Card