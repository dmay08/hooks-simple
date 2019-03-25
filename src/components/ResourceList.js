import React from 'react'
import useResources from './useResources'

// created all the hooks logic here then moved it all to its own component (useResources)

const ResourceList = ({resource}) => { // had to destructure >> don't want <ResourceList/> passing down 'props.resource' vs. <UserList/> passing down 'resource' to <useResources/>
    const resources = useResources(resource) // since 'users' !== props.resource >> 'users' === resource!

    return (
        <ul>
            {resources.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    )
}

export default ResourceList

// ============================ ABOVE = converted to FUNCTIONAL component (from CLASS-based, below) ===========================


// class ResourceList extends React.Component {
//     state = { resources: [] }

//     async componentDidMount() {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//         // posts = '/posts' after base URL
//         // todos = '/todos' after base URL
//         this.setState({ resources: response.data })
//             // *** whenever we click a <button> (in App.js) >> ResourceList gets re-rendered BUT componentDidMount() does NOT run again!
//             // need to add another lifecycle method to update STATE in this component >>> componentDidUpdate()!!
//     }

//     async componentDidUpdate(prevProps) {
//         if (prevProps.resource !== this.props.resource) {
//             // needed to add this check to prevent infinite loop
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
//             this.setState({ resources: response.data })
//         }

//     }

//     render() {
//         return (
//             <div>{this.state.resources.length}</div>
//         )
//     }
// }

// export default ResourceList