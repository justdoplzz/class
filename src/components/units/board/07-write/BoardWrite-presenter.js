import { BlueButton, RedInput } from './BoardWrite-styles'

export default function BoardWriteUI(props){
    return(
        <div>
            <div>======= BoardWrite-presenter 시작 부분 =======</div>
            <div>
                작성자 : <RedInput
                            type="text"
                            onChange={props.onChangeWriter}
                        /> <br/>
                제목 : <input type="text" onChange={props.onChangeTitle}/> <br/>
                내용 : <input type="text" onChange={props.onChangeContents}/> <br/>
                <BlueButton
                    onClick={props.onClickSubmit}
                    isActive={props.isActive}
                >GRAPHQL-API 요청
                </BlueButton>
            </div>
            <div>======= BoardWrite-presenter 끝 부분 =======</div>
        </div>
    )
}

export const exportTest = 3
