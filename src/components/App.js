import React, { useState } from 'react' // 'useState' = react hook
import ResourceList from './ResourceList'
import UserList from './UserList'

// class App extends React.Component {
//    state = { resource: 'posts'}
//      render() {

const App = () => { // converted to functional component (from class based)

    const [resource, setResource] = useState('posts')
    // b4 (when class-based state={}), we'd reference 'posts' by saying 'resource: posts' 
    // w/ functional component / hooks >> we just reference 'posts'

    return (
        <div>
            <div>
            <UserList />
                {/* <button onClick={() => this.setState({ resource: 'todos'})}>Todos</button> */}
                <button onClick={() => setResource('posts')}>Posts</button>
                {/* <button onClick={() => this.setState({ resource: 'posts'})}>Posts</button> */}
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            {/* {this.state.resource} */}
            <ResourceList resource={resource} />
        </div>
    )
}


export default App

