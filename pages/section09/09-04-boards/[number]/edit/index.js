import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite-container";

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
`

export default function BoardsEditPage(props){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number)}
    })

    return (
        <div>
            <div>------ BoardEditPage 시작 ------</div>
            <BoardWrite isEdit={true} data={data} />
            <div>------ BoardEditPage 끝 ------</div>
        </div>
    )
}