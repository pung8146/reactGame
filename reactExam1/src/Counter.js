import React, {useState} from "react"
import OddEvenResult from "./OddEvenResult";

const Counter = (props) => {

    const [count,setCount] = useState(props.initiaValue);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecerase = () => {
        setCount(count - 1);
    }
return (
    <div>  
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecerase}>-</button>
        <OddEvenResult count={count} />
    </div>
)
}

Counter.defaultProps = {
     initiaValue:0
}

export default Counter