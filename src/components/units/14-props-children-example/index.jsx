export default function Example(props){
    return (
        <div>
            <div>안녕하세요, 영희에요</div>
            <hr/>
            <div>{props.school}</div>
            <hr/>
            <div>{props.children}</div>
            <hr/>
            <div>안녕하세요, 훈이에요</div>
        </div>
    )
}