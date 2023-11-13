import axios from "axios"

export default function RestGetPage(){
    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log("Async :", result)  //Promise
    }

    // 1. 함수 중복 선언 문제
    // async function onClickSync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log("Sync : ", result)  // 제대로된 결과 -> {title:"....", }
    // }

    // 2. 화살표 함수 : 중복선언 문제 해결
    const onClickSync = async () =>{
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log("Sync : ", result)  // 제대로된 결과 -> {title:"....", }

    }

    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청</button>
            <button onClick={onClickSync}>REST-API(동기) 요청</button>
        </div>
    )
}