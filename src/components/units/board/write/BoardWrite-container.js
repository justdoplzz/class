import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI, { exportTest } from './BoardWrite-presenter'; // export default : 하나만 가져올 수 있음, 이름 변경 가능
import { graphqlSetting } from './BoardWrite-queries'; // export : 골라서 가져오기 가능 , 이름 변경 불가능
import * as S from './BoardWrite-styles';

export default function BoardWrite(){
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [myFunction] = useMutation(graphqlSetting)

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {            // variables : $ 역할 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    return(
        <div>
            <div>------- BoardWrite-container 시작 부분 -------</div>
            <hr/>
           <div> export, export-default 테스트
                {exportTest}
                <S.RedInput type="text" placeholder='test'/>
                <S.BlueButton>test버튼</S.BlueButton>
            </div>
            <hr/>
            <BoardWriteUI
                aaa={onClickSubmit}
                bbb={onChangeWriter}
                ccc={onChangeTitle}
                ddd={onChangeContents}
                />
            <div>------- BoardWrite-container 끝 부분 -------</div>
        </div>
    )
}