import { format } from 'date-fns';
import { useEffect, useState } from "react";
const CurrentTime = () => {

    const [currentTime, setCurrentTime] = useState(new Date());
    const [formattedTime1, setFormattedTime1] = useState();
    const [formattedTime2, setFormattedTime2] = useState();
    const [formattedTime3, setFormattedTime3] = useState();
    const [formattedTime4, setFormattedTime4] = useState();
    const [formattedTime5, setFormattedTime5] = useState();
    const [formattedTime7, setFormattedTime7] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            setFormattedTime1(formattedTime11);
            setFormattedTime2(formattedTime22);
            setFormattedTime3(formattedTime33);
            setFormattedTime4(formattedTime44)
            setFormattedTime5(formattedTime55)
            setFormattedTime7(formattedTime77)
        }, 1000);
        
        
        // 컴포넌트가 언마운트될 때 인터벌을 정리합니다
        return () => {
            clearInterval(intervalId);
            clearInterval(formattedTime11)
            clearInterval(formattedTime22)
            clearInterval(formattedTime33)
            clearInterval(formattedTime44)
            clearInterval(formattedTime55)
            clearInterval(formattedTime77)
        }
    }, []); // 빈 배열은 컴포넌트가 마운트될 때 한번만 실행됩니다.
    
    const timestamp = Date.now();
    const date = new Date(timestamp);

    // 1
    const formattedTime11 = date.toLocaleString();

    // 2
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    const formattedTime22 = new Intl.DateTimeFormat('en-US', options).format(date);

    // 3
    const currentDateTime = new Date();
    const formattedTime33 = currentDateTime.toISOString().slice(0, 19).replace('T', ' ');

    // 4
    const timestamp2 = new Date();
    const formattedTime44 = timestamp2.toISOString()
                                  .replace(/[-T:]/g, '') // '-'와 'T'를 제거
                                  .replace('.', ''); // 밀리초 '.' 제거

    // 5
    const formattedTime55 = timestamp2.toString()
                                .replace(/[-T:]/g, '') // '-'와 'T'를 제거
                                .replace('.', ''); // 밀리초 '.' 제거
    
    // 6
    // const formattedDate66 = timestamp2(date, 'MMMM do yyyy, h:mm:ss a');

    // 7
    const formattedTime77 = format(timestamp2, 'yyyyMMddHHmmssSSS', { timeZone: 'Asia/Seoul' });


    return(
        <div>
            <p>현재 시간</p>
            <p>날짜 시간 (currentTime.toLocalString): {currentTime.toLocaleString()}</p>
            <p>날짜 (currentTime.toLocaleDateString): {currentTime.toLocaleDateString()}</p>
            <p>시간 (currentTime.toLocaleTimeString): {currentTime.toLocaleTimeString()}</p>
            <hr/>
            <p>timestamp</p>
            <p>1. {formattedTime1}</p>
            <p>2. {formattedTime2}</p>
            <hr/>
            <p>3. {formattedTime3}</p>
            <hr/>
            <p>4. {formattedTime4}</p>
            <p>5. {formattedTime5}</p>
            <p>7. {formattedTime7}</p>
            
        </div>
    )
}

export default CurrentTime;