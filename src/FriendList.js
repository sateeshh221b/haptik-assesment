import Fav from "./assets/favorite.png";
import FavFill from "./assets/favorite-fill.png";
import DeleteBtn from "./assets/delete.png";
import React, { useState } from "react";

const FriendList = (props) => {
  const [count, setCount] = useState(false);
  const todolist = props.friendlist.length ? (
    props.friendlist.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <div className="friendName">
            <h6>{todo.content}</h6>
            <p>{props.relation}</p>
          </div>
          <div className="actionBtn">
            <span id="fav" onClick={() => setCount((todo.favorite = !count))}>
              <img key={todo.id} src={!todo.favorite ? Fav : FavFill} />
            </span>
            <span id="del" onClick={() => props.deleteTodo(todo.id)}>
              <img src={DeleteBtn} />
            </span>
          </div>
        </div>
      );
    })
  ) : (
    <p className="emptyList">Friends list is empty</p>
  );

  return <div className="listItems">{todolist}</div>;
};

export default FriendList;
