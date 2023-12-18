import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FuncCounterPage(){

    const [count, setCount] = useState();
    const router = useRouter();

    // componentDidMount 와 동일
    useEffect(() => {
        console.log("return 이후 실행")
    }, []);     // 빈 배열이므로 처음 한번만 실행되고, 변경 되었을 때만 실행

    // componentDidMount + componentDidUpdate 와 동일
    useEffect(() => {
        console.log("변경되고 나서 실행")
    });     // 무조건 다시 실행

    useEffect(() => {
        // componentWillUnMount 와 동일
        return () => {
            console.log("사라지기 전에 실행")
        }
    }, []);

    // 1. useEffect 하나로 합치기
    useEffect(() => {
        console.log("--- return 이후 실행")

        return() => {
            console.log("--- 사라지기 전에 실행")
        }
    }, [])

    // 2. useEffect 잘못된 사용법
    // 2-1. 추가 렌더링 (useEffect 안에서 setState를 하게되면 추가 렌더링 됨)
    // 2-2. 무한루프
    useEffect(() => {
        // setWriter()
        // setCount(prev => prev + 1)      // useEffect 안에서 setCount를 사용하면 재렌더링이 일어나는데 prev +1 이기 때문에 =>무한루프에 빠짐
    }, [count])

    const onClickCountUp = () => {
        console.log(count)
        setCount(1);
    }

    const onClickMove = () => {
        
        router.push("/")
    }

    console.log("render 함수")
    return(
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickMove}>나가기</button>
        </>
    )
}