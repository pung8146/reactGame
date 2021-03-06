const React = require('react');
const { Module } = require('webpack');
const { Component } = React;

class WordRelay extends React.Component {
 
    state = {
        wrod:'박상훈',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value : '',
            });
            this.input.focus();
        }else {
            this.setState({
                result: '땡',
                value : '',
            })
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({value:e.target.value})
    };

    input;

    onRefInpuf = (c) => {
        this.input = c;
    };

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInpuf} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                    <div>{this.state.result}</div>
                </form>
            </>
        )
    }
}

module.exports = WordRelay;