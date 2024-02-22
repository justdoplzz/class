import { useState } from 'react';

const index = () => {

    const [clickCount, setClickCount] = useState(0);
    
    console.log("clickCount",clickCount)
    const handle3Click = () => {
        setClickCount((prevCount) => prevCount + 1);

        if(clickCount === 2) {
            alert('3번 클릭함')
            setClickCount(0);
        }
    }

    return(
        <>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ display: 'flex' , gap: '10px'}}>
                    <div style={{background: 'yellow', width: '100px'}}>
                        a
                    </div>
                    <div style={{background: 'red', width: '100px'}}>
                        b
                    </div>
                    <div style={{background: 'blue', width: '100px'}}>
                        c
                    </div>
                </div>
                <div style={{background: 'green', width: '300px'}}>
                    d
                </div>
            </div>
            <br/><br/><br/>


            
            <h3 onClick={handle3Click} style={{background: 'pink'}}>3번 연속 클릭 시 alert 뜸</h3>
        </>
    );
}

export default index;