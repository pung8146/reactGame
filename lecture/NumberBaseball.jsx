import React, { Component } from require("react");

function getNumbers() { // 숫자 네 개를 겹치치 않고 랜덤하게 뽑는 함수
    
}

class NumberBaseBall extends Component {
    state = {
        result : '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {

    };

    onChangeInput = () => {

    }

    render () {
        return (
            <>
             <h1>{this.state.result}</h1>
             <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                {/* <input maxLength={4} defaultValue={this.state.value}/>  위 아니면 아래*/}            
             </form>            
             <div>시도 : {this.state.tries.length}</div>
             <ul>
                 {['like', 'like', 'like'].map(() => {
                     return (
                         <li>like</li>
                     );
                 })}
             </ul>
            </>
        );
    }
}

export default NumberBaseBall;