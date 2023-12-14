export default function Example(props){
    return (
        <div>
            <hr/>
            <div>안녕하세요, 영희에요</div>
            <div>{props.school}</div>
            <div>{props.children}</div>
            <div>안녕하세요, 훈이에요</div>
            <hr/>
        </div>
    )
}