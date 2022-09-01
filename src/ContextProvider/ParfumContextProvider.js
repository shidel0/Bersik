import { async } from "@firebase/util";
import { Api } from "@mui/icons-material";
import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const parfumContext = createContext();
const API = "http://localhost:8000/parfum";

const INIT_STATE = {
  parfum: [],
  parfumDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PARFUM":
      return {
        ...prevState,
        parfum: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 7),
      };

    case "GET_ONE_PARFUM":
      return {
        ...prevState,
        parfumDetails: action.payload.data,
      };
    default:
      return prevState;
  }
};

const ParfumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
  const addParfum = (parfum) => {
    axios.post(API, parfum);
  };
  const getParfum = async () => {
    const response = await axios(`${API}${location.search}`);

    dispatch({
      type: "GET_PARFUM",
      payload: response,
    });
  };

  const deleteParfum = async (id) => {
    await axios.delete(`${API}/${id}`);
    getParfum();
    navigate("/all-products");
  };

  const editParfum = async (id, obj) => {
    await axios.patch(`${API}/${id}`, obj);
    getParfum();
    // navigate("/all-products");
  };

  const getOneParfum = async (id) => {
    const data = await axios(`${API}/${id}`);
    // console.log(data);
    dispatch({
      type: "GET_ONE_PARFUM",
      payload: data,
    });
    // console.log(getOneParfum());
  };

  const cloud = {
    addParfum,
    getParfum,
    deleteParfum,
    editParfum,
    getOneParfum,
    parfumArr: state.parfum,
    parfumDetails: state.parfumDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <div>
      <parfumContext.Provider value={cloud}>{children}</parfumContext.Provider>
    </div>
  );
};

export default ParfumContextProvider;
