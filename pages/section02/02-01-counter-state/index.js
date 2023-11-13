import { useState } from 'react';

export default function CounterStatePage(){
    // let count = 0    // let은 리액트 전용 html에서 변경을 감지 못함
    const [count, setCount] = useState(0);
    
    function countUp(){
        setCount(count + 1)
    }

    function countDown(){
        setCount(count - 1)
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={countUp}>카운트 올리기</button>
            <button onClick={countDown}>카운트 내리기</button>
        </div>
    )
}