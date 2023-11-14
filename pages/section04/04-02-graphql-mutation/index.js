import { gql, useMutation } from "@apollo/client"

const graphqlSetting = gql`
    mutation{
        createBoard(writer:"하영", title:"안녕하쇼", contents:"반갑습니다"){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage(){
    const [myFunction] = useMutation(graphqlSetting)

    const onClickSubmit = async () => {
        const result = await myFunction()
        console.log(result)
    }

    return(
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )
}