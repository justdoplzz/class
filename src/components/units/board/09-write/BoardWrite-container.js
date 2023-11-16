import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite-presenter'; // export default : 하나만 가져올 수 있음, 이름 변경 가능
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite-queries'; // export : 골라서 가져오기 가능 , 이름 변경 불가능

export default function BoardWrite(props){
    const router = useRouter()

    const [writer, setWriter] = useState()
    const [title, setTitle] = useState()
    const [contents, setContents] = useState()

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    // 등록
    const onClickSubmit = async () => {
        const result = await createBoard({
            variables: {            // variables : $ 역할 함
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
    }

    // 수정
    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents,
            }
        })
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`)
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
            <div>------ container 시작 ------</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
                />
            <div>------ container 끝 ------</div>
        </div>
    )
}