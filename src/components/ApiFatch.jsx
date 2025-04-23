import axios from 'axios';
import  { useEffect, useState } from 'react';

const ApiFatch = () => {
    const [users , setUsers] = useState([])
    const [error , setError] = useState(" ")
    
    // useEffect(
    //     () => {
    //         fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((data) => setUsers(data))
    //     } , []
    // )

    useEffect(
        () => {
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((data) => setUsers(data.data))
            .catch((err) => setError(err.message))
        } , []
    )

    return (
        <div>
            {error && ( <p className='bg-red-200 text-red-400 m-3 rounded-md border-l-4 p-2'> {error} </p> )}
            <ul className=' list-decimal list-inside list-item' >
                {users.map(
                    (data) => ( <li key={data.id}> User Name :  {data.name} </li> )
                )}
            </ul>
        </div>
    );
};

export default ApiFatch;