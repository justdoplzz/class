import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite-container";

export default function BoardsNewPage(props){

    return (
        <div>
            <div>------ BoardNewPage 시작 ------</div>
            <BoardWrite isEdit={false} />
            <div>------ BoardNewPage 끝 ------</div>
        </div>
    )
}