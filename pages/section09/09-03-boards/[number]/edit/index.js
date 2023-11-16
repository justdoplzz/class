import BoardWrite from "../../../../../src/components/units/board/09-write/BoardWrite-container";

export default function BoardsEditPage(props){

    return (
        <div>
            <div>------ BoardEditPage 시작 ------</div>
            <BoardWrite isEdit={true} />
            <div>------ BoardEditPage 끝 ------</div>
        </div>
    )
}