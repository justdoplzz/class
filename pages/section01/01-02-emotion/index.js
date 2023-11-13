import { MyEamilInput, MyEmail } from '../../../styles/01-02-emotion';

function EmotionPage(){
    return(
        <div>
            <MyEmail>이메일 : </MyEmail>
            <MyEamilInput type="text"/>
            <button>클릭</button>
            <br/><br/>
            <img src="/hello.jpg"/>
        </div>
    )
}

export default EmotionPage;