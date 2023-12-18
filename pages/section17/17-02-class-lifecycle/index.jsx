import Router from "next/router";
import { Component } from "react";

export default class ClassCounterPage extends Component{

    state = {
        count: 0,
    };

    componentDidMount(){
        console.log("render 이후 실행")
    }

    componentDidUpdate(){
        console.log("변경되고 나서 실행")
    }

    componentWillUnmount(){
        console.log("사라지기 전에 실행")
        // 예) 채팅방 나가기 API
    }

    onClickCountUp = () => {
        console.log(this.state.count)
        this.setState({
            count: ++this.state.count,
        });
    }

    onClickMove = () => {
        Router.push("/")
    }

    render(){
        console.log("render 함수")
        return(
            <>
                <div>{this.state.count}</div>
                <button onClick={this.onClickCountUp}>카운트 올리기</button>
                <button onClick={this.onClickMove}>나가기</button>
            </>
        )
    }
}