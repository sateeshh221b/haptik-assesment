import React from "react";

class AddFriend extends React.Component {
  state = {
    content: "",
    favorite: false,
    sKey: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmt = (e) => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      content: "",
    });
  };

  onTrigger = (event) => {
    this.props.parentCallback(event.target.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmt}>
          <input
            type="text"
            onInput={this.onTrigger}
            onChange={this.handleChange}
            value={this.state.content}
            placeholder="Enter your friend's name"
          />
        </form>
      </div>
    );
  }
}

export default AddFriend;
