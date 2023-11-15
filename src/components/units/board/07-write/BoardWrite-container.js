import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite-presenter'; // export default : 하나만 가져올 수 있음, 이름 변경 가능
import { graphqlSetting } from './BoardWrite-queries'; // export : 골라서 가져오기 가능 , 이름 변경 불가능

export default function BoardWrite(){
    const [isActive, setIsActive] = useState(false)

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
        if(event.target.value && title && contents){
            setIsActive(true)
        }
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer && event.target.value && contents){
            setIsActive(true)
        }
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer && title && event.target.value){
            setIsActive(true)
        }
    }
    return(
        <div>
            <div>------- BoardWrite-container 시작 부분 -------</div>
            <hr/>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isActive={isActive}
                />
            <div>------- BoardWrite-container 끝 부분 -------</div>
        </div>
    )
}