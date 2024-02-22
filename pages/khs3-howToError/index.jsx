import { firstFunction } from "./firstFunction";

const index = () => {

    const handleButtonClick = () => {
        try {
            console.log("[index]")
            firstFunction();
            console.log("[index] firstFunction 호출 후")
        } catch (error) {
            console.error("Error in Index: ", error.message)
        }
    }

    return (
        <div>
            <button onClick={handleButtonClick}>함수 호출</button>
        </div>
    )
}

export default index;