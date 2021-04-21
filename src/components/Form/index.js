import React from "react";

const InputName = (props) => {
  return (
    <textarea
      onClick={() => {
        props.onClick("inputName");
      }}
    ></textarea>
  );
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "false",
    };
  }
  //   state = { inputName: "value" };

  handleClick(id) {
    // const newState = { ...this.state };
    // newState[id] = "true";
    console.log("this.state ", this.state);
    // this.setState({ inputName: "true" });
    console.log("handleClick", id);
  }

  render() {
    // const id = "inputName";
    // const newState = { ...this.state };
    // newState[id] = "true";
    // console.log(newState);

    return (
      <div>
        <InputName onClick={this.handleClick} />
      </div>
    );
  }
}

export default Form;
