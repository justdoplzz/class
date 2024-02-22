import { thirdFunction } from "./thirdFunction";

export const secondFunction = () => {
    try {
        console.log("[secondFunction]")
        thirdFunction();
        console.log("[secondFunction] thirdFunction 호출 후")
    } catch (error) {
        console.error("Error in secondFunction: ", error.message);
        throw error;
    }
}