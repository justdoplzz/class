import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(){

    const [dog, setDog] = useState("")


    useEffect(() => {
        const onClickSync = async ()  => {
            const result = await axios.get("https://dog.ceo/api/breeds/image/random")
            console.log(result)
            console.log(result.data.message); // 사진 주소
            setDog(result.data.message)
        }
        onClickSync();
    },[])

    return(
        <div>
            <img src={dog} />
        </div>
    )
}