export default function CounterLetCocumentPage(){
    
    function countUp(){
        const count = Number(document.getElementById("num").innerText) + 1
        document.getElementById("num").innerText = count;
    }

    function countDown(){
        const count = Number(document.getElementById("num").innerText) - 1
        document.getElementById("num").innerText = count;
    }

    return(
        <div>
            <div id="num">0</div>
            <button onClick={countUp}>카운트 올리기</button>
            <button onClick={countDown}>카운트 내리기</button>
        </div>
    )
}