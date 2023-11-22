import React, { useState } from "react";
import * as yup from 'yup';

const schema = yup.object().shape({
    data: yup.string().required('필수 입력 항목입니다.')
})

const validation = () => {

    const [data, setData] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        try{
            schema.validateSync({data: inputValue})
            setError('');
        } catch(validationError){
            setError(validationError.errors[0])
        }
        setData(inputValue)
    }

    const handleButtonClick = () => {
        if(data.trim() === '' ){
            alert('input 값이 비어있습니다')
        }
    }
    return(
        <div>
            <h2>input 값 validation 체크</h2>
            <input type="text" value={data} onChange={handleInputChange}/>
            {error && <p style={{color:'red'}}>{error}</p>}
            <button onClick={handleButtonClick}>제출</button>
        </div>
    )

}

export default validation;