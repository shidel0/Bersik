import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { commentContext } from "ContextProvider/CommentsContextProvider";
import React, { useContext, useEffect, useState } from "react";
import "./Coments.css";

const Coments = () => {
  const [name, setName] = useState();
  const [comment, setComment] = useState();

  const {
    addcomments,
    getcomments,
    deletecomments,
    commentsArr,
    commentDetails,
  } = useContext(commentContext);

  const handleClick = () => {
    const newDate = {
      name,
      comment,
    };
    addcomments(newDate);
    setComment("");
  };

  useEffect(() => {
    getcomments();
  }, []);

  return (
    <div className="mainContainer">
      {" "}
      <div>How many comments?</div>
      <div className="addComments">
        <div className="inputs">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Напишите имя"
          />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Оставьте комментарий"
          />
        </div>
        <div>
          {" "}
          <Button onClick={handleClick}>Добавить комментарий</Button>
        </div>
      </div>{" "}
      {commentsArr.map((item) => (
        <div key={item.id} className="container15">
          <div>{item.name}</div>
          <div className="sentCommets">
            <div className="com-1">{item.comment}</div>
            <div className="com-2">
              <Button onClick={() => deletecomments(item.id)}>del</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Coments;
