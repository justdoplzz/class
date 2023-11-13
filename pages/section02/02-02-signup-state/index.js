import { useState } from "react";

export default function SignupStatePage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')

    function signUp(){
        console.log("email:", email)
        console.log("password:", password)

        // 1. 검증하기
        if(email.includes("@" && ".com") === false){
            // alert("이메일 형식이 아닙니다.")
            setEmailError("이메일 형식이 아닙니다")
        } else{
            // 2. api 호출
            // (나중에)

            // 3. 성공 알람
            alert("회원가입 성공")
        }
    }

    function onChangeEmail(event){
        //console.log("1 event : ", event)  // 나의 행동
        //console.log("2 vent.target : ", event.target)   // 작동된 태그
        //console.log("3 event.target.value : ", event.target.value) //작동된 태그의 값
        setEmail(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    return(
        <div>
            이메일 : <input type="text" onChange={onChangeEmail} />
            <div style={{color:'reds'}}>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={signUp}>회원가입</button>
        </div>
    )
}