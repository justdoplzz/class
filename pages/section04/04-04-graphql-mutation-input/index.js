import { gql, useMutation } from "@apollo/client"
import { useState } from "react"

const graphqlSetting = gql`
    mutation createBoard($writer:String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationInputPage(){
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
            작성자 : <input type="text" onChange={onChangeWriter}/> <br/>
            제목 : <input type="text" onChange={onChangeTitle}/> <br/>
            내용 : <input type="text" onChange={onChangeContents}/> <br/>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
        </div>
    )
}