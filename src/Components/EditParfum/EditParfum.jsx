import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { parfumContext } from "ContextProvider/ParfumContextProvider";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../AddProduct/AddParfum.css";
const EditParfum = () => {
  const { editParfum, parfumDetails, getOneParfum } = useContext(parfumContext);
  const [editName, setEditName] = useState(parfumDetails.name);
  const [editDesc, setEditDesc] = useState(parfumDetails.desc);
  const [editUrl, setEditUrl] = useState(parfumDetails.url);
  const [editPrice, setEditPrice] = useState(parfumDetails.price);
  const [editType, setEditType] = useState(parfumDetails.type);
  const [editVolume, setEditVolume] = useState(parfumDetails.volume);

  const handleClick = () => {
    if (
      !editName ||
      !editDesc ||
      !editUrl ||
      !editPrice ||
      !editType ||
      !editVolume
    ) {
      alert("Введите все инпуты");
      return;
    }
    let parfum = {
      name: editName,
      desc: editDesc,
      url: editUrl,
      type: editType,
      price: +editPrice,
      volume: editVolume,
    };

    editParfum(id, parfum);
  };

  const handleType = (e) => {
    setEditType(e.target.value);
  };

  const { id } = useParams();
  useEffect(() => {
    getOneParfum(id);
  }, [id]);

  return (
    <div className="lastAddAnime">
      <div className="addanime">
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите название"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />

        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Введите описание"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Вставьте ссылку на картинку"
          value={editUrl}
          onChange={(e) => setEditUrl(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Количество"
          value={editVolume}
          onChange={(e) => setEditVolume(e.target.value)}
        />
        <TextField
          sx={{ m: 1 }}
          className="inputAddAnime"
          label="Назовите цену"
          value={editPrice}
          onChange={(e) => setEditPrice(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            sx={{ m: 1 }}
            className="inputAddAnime"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={editType}
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
          Изменить
        </Button>
      </div>
    </div>
  );
};

export default EditParfum;
