import axios from "axios";
import React, { createContext, useReducer } from "react";

export const commentContext = createContext();
const API = "http://localhost:8000/comments";

const INIT_STATE = {
  comment: [],
  parfumDetails: null,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...prevState,
        comment: action.payload.data,
      };
    case "GET_ONE_COMMENTS":
      return {
        ...prevState,
        parfumDetails: action.payload.data,
      };

    default:
      return prevState;
  }
};

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addcomments = (comments) => {
    axios.post(API, comments);
  };
  const getcomments = async () => {
    const response = await axios(`${API}`);

    dispatch({
      type: "GET_COMMENTS",
      payload: response,
    });
  };

  const deletecomments = async (id) => {
    await axios.delete(`${API}/${id}`);
    getcomments();
  };

  const cloud = {
    addcomments,
    getcomments,
    deletecomments,
    commentsArr: state.comment,
    commentDetails: state.commentDetails,
  };

  return (
    <div>
      <commentContext.Provider value={cloud}>
        {children}
      </commentContext.Provider>
    </div>
  );
};

export default CommentsContextProvider;
