import React from 'react'
import useResources from './useResources'

const UserList = () => {
    const users = useResources('users') // adding /users to end of base_url >> returns list of users 
        // code reuse! using the SAME '<useResources()/>' hook we used to grab 'resources' as we do now to grab 'users' 

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UserList


