export default function Layout(props){
    return (
        <>
            <hr/>
            <div>----헤더----</div>
            <div>----배너----</div>
            <div>----내비게이션----</div>
            <div>{props.children}</div>
            <div>----푸터----</div>
            <hr/>
        </>
    )
}