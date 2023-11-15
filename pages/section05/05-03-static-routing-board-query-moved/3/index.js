import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:19593){
            number
            writer
            title
            contents
        }
    }
`

export default function StaticRoutingBoardQueryMovedPage(){
    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    return (
        <div>
            <div>3번 페이지 이동 완료</div>
            {/* 조건부 렌더링 대신 옵셔널 체이닝 사용 (optional-chaining)*/}
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </div>
    )
}