// file that exports a function (lowerCase)
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const useResources = (props) => {
// 	console.log("TCL: useResources -> props", props)
//     const [resources, setResources] = useState([]) // ====== moved this line down from '<ResourceList/>' to up here

//     const fetchResources = async (props) => {
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resource}`)
//         setResources(response.data)
//     }

//     useEffect(() => { fetchResources(props) }, [props.resource])  // ====== moved this line up from '<ResourceList/>' to up here
//         //useEffect() = 'componentDidMount + componentDidUpdate'

//     return resources // only line that we added (versus just moving up)
// }

// export default useResources




import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => { // changed to (resource) from (props) to get BOTH <UserList('posts / todos')/> AND <ResourceList('users')/> rendering
    const [resources, setResources] = useState([]) // ====== moved this line down from '<ResourceList/>' to up here

    const fetchResources = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        setResources(response.data)
    }

    useEffect(() => { fetchResources(resource) }, [resource])  // ====== moved this line up from '<ResourceList/>' to up here
        //useEffect() = 'componentDidMount + componentDidUpdate'

    return resources // only line that we added (versus just moving up)
}

export default useResources




