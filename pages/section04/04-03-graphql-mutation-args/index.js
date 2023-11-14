import { gql, useMutation } from "@apollo/client"

const graphqlSetting = gql`
    mutation createBoard($writer:String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationArgsPage(){
    const [myFunction] = useMutation(graphqlSetting)

    const onClickSubmit = async () => {
        const result = await myFunction({
            variables: {            // variables : $ 역할 함
                writer: "맹구",
                title: "안녕하세요",
                contents: "맹구에요"
            }
        })
        console.log(result)
    }

    return(
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )
}