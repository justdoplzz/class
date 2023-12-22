import { useEffect } from "react";
import TestList from "../../components/khs/TestList";

const Index = () => {


    useEffect(() => {
        console.log("---------- index useEffect ----------")
    })

    console.log("---------- index render ----------")
    return (
        <div style={{background: "blue"}}>
            <div>--------------- khs index 시작 ---------------</div>
            <TestList>

            </TestList>
            <div>--------------- khs index 종료 ---------------</div>
        </div>
    )
}

export default Index;