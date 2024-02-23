import { firstFunction } from "./firstFunction";

const index = () => {

    const handleButtonClick = () => {
        try {
            console.log("[index]")
            firstFunction();
            console.log("[index] firstFunction 호출 후")
        } catch (error) {
            // 에러 객체의 stack 속성을 사용하여 에러 발생 위치 확인
            // console.error("Error in Index: ", error.stack);
            console.error("Error in Index: ", error.message);

            // 에러 메시지에 따라서 특정 처리를 수행할 수 있음
            if(error.message.includes("firstFunction")){
                console.error('Error in 3')
            } else if (error.message.includes("secondFunction")){
                console.error('Error in 2')
            } else if (error.message.includes("thirdFunction")){
                console.error('Error in 3')
            }
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>함수 호출</button>
        </div>
    )
}

export default index;