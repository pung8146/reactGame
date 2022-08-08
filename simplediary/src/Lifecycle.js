import React,{ useEffect,useState } from 'react';

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!");
        return () => {
            console.log("Unmount!")
        };
    },[]);

    return <div> Unmount Testsing Component </div>
}

const Lifecycle = () => {
    const [isVisble,setIsVisble] = useState(false);
    const toggle = () => setIsVisble(!isVisble);

    return ( 
    <div style={{ padding: 20 }}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisble && <UnmountTest/>}
    </div>
    );
}

export default Lifecycle;  