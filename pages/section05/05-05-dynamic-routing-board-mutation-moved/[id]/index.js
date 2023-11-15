import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function DynamicRoutingBoardMutationMovedPage(){
    const router = useRouter()
    console.log(router)
    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.id)}
    })

    console.log(data)

    return (
        <div>
            <div>{data?.fetchBoard?.number}번 페이지 이동 완료</div>
            {/* optional chaining 사용, 삭제된 데이터가 있을 수 있으니 추가로 fetchBoard 뒤에도 ? 붙임 */}
            <div>작성자 : {data?.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            <div>내용 : {data?.fetchBoard?.contents}</div>
        </div>
    )
}