import Example from "../../../src/components/units/14-props-children-example";


export default function PropsChildrenPage(){
    return (
        <Example school="다람쥐초등학교">
            {/* 아래 div 는 props.children 으로 전달됨 */}
            <div>
                <input type="text" />
                <div>저는 철수에요</div>
                <button>클릭해주세요</button>
            </div>
        </Example>
    )
}