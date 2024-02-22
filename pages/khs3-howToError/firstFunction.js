import { secondFunction } from "./secondFunction";

export const firstFunction = () => {
    try {
        console.log("[firstFunction]")
        secondFunction();
        console.log("[firstFunction] 호출 후")
    } catch (error) {
        console.error("Error in firstFunction: ", error.message);
        throw error;
    }
}