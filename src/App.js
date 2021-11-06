import React from "react";
import FriendList from "./FriendList";
import AddFriend from "./AddFriend";
import Pagination from "./Pagination";

class App extends React.Component {
  state = {
    friendlist: [],
    isfriend: "is your friend",
    searchTerm: "",
    currentPage: "1",
    postsPerPage: "4",
  };

  deleteItem = (id) => {
    const tod = this.state.friendlist.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      friendlist: tod,
    });
  };

  addFriend = (todo) => {
    todo.id = Math.random();
    let tod = [...this.state.friendlist, todo];
    this.setState({
      friendlist: tod,
      searchTerm: "",
    });
  };

  handleCallback = (childData) => {
    this.setState({ searchTerm: childData });
  };

  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.state.friendlist.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });
    const dynamicSearch = (posts) => {
      var original = posts;
      if (this.state.searchTerm === "") {
        return original;
      }
      return posts.filter((name) =>
        name.content.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    };

    return (
      <div className="todo-app  container">
        <div className="wrapper">
          <h4>Friends List</h4>
          <AddFriend
            addFriend={this.addFriend}
            parentCallback={this.handleCallback}
          />
          <FriendList
            friendlist={dynamicSearch(currentPosts)}
            relation={this.state.isfriend}
            deleteTodo={this.deleteItem}
          />
        </div>
        <Pagination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.friendlist.length}
          paginate={paginate}
        />
      </div>
    );
  }
}

export default App;
