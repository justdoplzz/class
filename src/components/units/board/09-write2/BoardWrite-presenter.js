import { RedInput } from './BoardWrite-styles'

export default function BoardWriteUI(props){
    return(
        <div>
            <div>======= BoardWrite-presenter 시작 =======</div>
            <div>
                작성자 : <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/> <br/>
                제목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/> <br/>
                내용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/> <br/>
                <button onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit }>{props.isEdit ? "수정" : "등록"}</button>
            </div>
            <div>======= BoardWrite-presenter 끝 =======</div>
        </div>
    )
}

export const exportTest = 3
