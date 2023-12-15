import { useEffect, useState } from "react";

function FunctionComponent(){
    const style = {
        container: {
            border: "5px solid red",
            margin: "10px"
        }
    }

    const funcStyle = 'color: blue';
    var funcId = 0;

    const [number, setNumber] = useState();
    const [date, setDate] = useState();

    // side effect
    useEffect(function(){       // render 가 끝나고 진행됨 (return  이 있으면 return 먼저 선행하고 useEffect 진행)
        console.log('%cfunc => useEffect ' + (++funcId), funcStyle)
        document.title = number;

        return function(){      // cleanup : render -> useEffect -> random 버튼 클릭 -> render -> useEffect 의 return -> useEffect
            console.log('%cfunc => useEffect return ' + (++funcId), funcStyle)
        }
    // });          // 1. 두번째 인자가 없는 경우 : componentDidMount, componentDidUpdate 와 동일
    // }, []);      // 2. 두번째 인자가 빈 배열인 경우 : componentDidMount 와 동일 (1회만 실행, 그 이후에는 실행 X)
    }, [number]);   // 3. 두번째 인자가 있는 경우 : 배열안에 있는 상태가 바뀌었을 때만 첫번째 인자인 콜백함수가 호출됨.


    const randomHandler = () => {
        setNumber(Math.random());
    }
    
    console.log('%cfunc => render ' + (++funcId), funcStyle)


    return(
        <div style={style.container}>
            <div>function style component</div>
            <p>Number : {number}</p>
            <p>date : {date}</p>
            <button onClick={randomHandler}>random</button>
            <input type="button" value="date" onClick={
                function(){
                    setDate((new Date()).toString());
                }
            }>

            </input>

        </div>
    )
}

export default FunctionComponent;