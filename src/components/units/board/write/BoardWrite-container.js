import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite-presenter';
import { graphqlSetting } from './BoardWrite-queries';


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