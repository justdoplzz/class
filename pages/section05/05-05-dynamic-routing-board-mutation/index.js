import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"

const graphqlSetting = gql`
    mutation createBoard($writer:String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`
export default function DynamicRoutingBoardMutationPage(){
    const router = useRouter()


    const [myFunction] = useMutation(graphqlSetting)

    const onClickSubmit = async () => {

        try {   //  try에 있는 내용 시도하다가 실패하면, 다음에 있는 모든 줄을을 모두 무시하고, catch에 있는 내용 실행
            const result = await myFunction({
                variables: {            // variables : $ 역할 함
                    writer: "맹구",
                    title: "안녕하세요",
                    contents: "맹구에요"
                }
            })
            console.log(result)
            console.log(result.data.createBoard.number)
            // router.push("/section05/05-05-dynamic-routing-board-mutation-moved/" + result.data.createBoard.number)
            router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)
        } catch(error) {
            alert(error.message)
        }
        
    }

    return(
        <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    )
}