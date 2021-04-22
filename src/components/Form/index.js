import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onClick={() => {
          props.onClick(props.id);
        }}
        onBlur={() => props.onBlur(props.id)}
        onChange={(e) => props.onChange(e, props.id)}
      ></input>
      <div>{props.showEmptyEr ? "пустое поле" : ""}</div>
    </div>
    //! TODO change style
  );
};

class Form extends React.Component {
  state = {
    inputName: {
      isTouched: false,
      error: true,
      isEmpty: true,
      showEmptyEr: false,
      isBlur: false,
      value: null,
    },
    inputMail: {
      isTouched: false,
      error: true,
      isEmpty: true,
      showEmptyEr: false,
      isBlur: false,
      value: null,
    },
  };

  handleClick = (id) => {
    const newState = { ...this.state };
    newState[id].isTouched = true;
    this.setState({ ...newState });
  };

  handleFocus = (id) => {
    const value = this.state[id].value;
    const newState = { ...this.state };
    newState[id].showEmptyEr = false;
    this.setState({ ...newState });
    if (value === "" || value === null) {
      newState[id].showEmptyEr = true;
      this.setState({ ...newState });
    }
  };

  handleInput = (e, id) => {
    const value = e.target.value;
    const newState = { ...this.state };
    newState[id].showEmptyEr = false;
    newState[id].value = value;
    this.setState({ ...newState });
  };

  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="input text"
          onClick={this.handleClick}
          id="inputName"
          showEmptyEr={this.state.inputName.showEmptyEr}
          onBlur={this.handleFocus}
          onChange={this.handleInput}
        />
        <Input
          type="email"
          placeholder="input email"
          onClick={this.handleClick}
          id="inputMail"
          showEmptyEr={this.state.inputMail.showEmptyEr}
          onBlur={this.handleFocus}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Form;
