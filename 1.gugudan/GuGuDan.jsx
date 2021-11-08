const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word : "박상훈",
    value : '',
    result : '',
  }


onSubmitFomr = () => {

};

render () {
  return (
  <>
    <div>{this.state.word}</div>
    <form onSubmit={this.onSubmitForm}> 
      <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
      <button>입력!</button>
    </form>
  </>
  );
}
}
module.exports = WordRelay;