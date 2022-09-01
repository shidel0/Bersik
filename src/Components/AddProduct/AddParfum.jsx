import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Product from "Components/Product/Product";
import { parfumContext } from "ContextProvider/ParfumContextProvider";
import React, { useContext, useState } from "react";
import "./AddParfum.css";
const AddParfum = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [volume, setVolume] = useState("");
  const { addParfum } = useContext(parfumContext);

  const handleClick = () => {
    const newDate = {
      name,
      desc,
      url,
      type,
      price,
      volume,
    };
    addParfum(newDate);
    setName("");
    setDesc("");
    setType("");
    setUrl("");
    setPrice("");
    setVolume("");
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="lastAddAnime">
      <div className="addanime">
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Вставьте ссылку на картинку"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Количество"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <TextField
          type="number"
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Назовите цену"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            sx={{ m: 1 }}
            className="inputAddAnime"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleType}
          >
            <MenuItem value={"flower"}>Цветочные</MenuItem>
            <MenuItem value={"citrus"}>Цитрусовые</MenuItem>
            <MenuItem value={"wooden"}>Еловые</MenuItem>
            <MenuItem value={"easten"}>Восточные</MenuItem>
            <MenuItem value={"fruits"}>Фруктовые</MenuItem>
            <MenuItem value={"fresh"}>Освежающие</MenuItem>
            <MenuItem value={"spicy"}>Пряные</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="success" onClick={handleClick}>
          Добавить парфюм
        </Button>
      </div>
    </div>
  );
};

export default AddParfum;
