import React, { useEffect, useState } from 'react';

let count = 0;

const Effect = () => {
    const [user , setUser] = useState([])
    const [dependancyA , setDependancyA] = useState(0)
    const [dependancyB , setDependancyB] = useState(0)

    useEffect(() => {
        console.log("Effect activate")
        setUser(["John"])
    },[dependancyA , dependancyB])
    return (
        <div>
            <h1>UserList {++count}</h1>
            <button onClick={() => setDependancyA(Math.random())} className='bg-blue-500 px-2 py-2 rounded-sm text-white ml-7'>Click Me A</button>
            <button onClick={() => setDependancyB(Math.random())} className='bg-blue-500 px-2 py-2 rounded-sm text-white ml-7'>Click Me B</button>
        </div>
    );
};

export default Effect;