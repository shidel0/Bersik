import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import React from "react";

const Filter = ({ type, setType, price, setPrice }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">По категориям</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female  "
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="flower"
            control={<Radio />}
            label="Цветочные"
          />
          <FormControlLabel
            value="citrus"
            control={<Radio />}
            label="Цитрусовые"
          />
          <FormControlLabel value="wooden" control={<Radio />} label="Еловые" />
          <FormControlLabel
            value="easten"
            control={<Radio />}
            label="Восточные"
          />
          <FormControlLabel
            value="fruits"
            control={<Radio />}
            label="Фруктовые"
          />
          <FormControlLabel
            value="fresh"
            control={<Radio />}
            label="Освежающие"
          />
          <FormControlLabel value="spicy" control={<Radio />} label="Пряные" />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="Все товары"
          />
        </RadioGroup>
        <FormLabel id="demo-radio-buttons-group-label">По ценам</FormLabel>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          min={0}
          max={20000}
        />
      </FormControl>
    </div>
  );
};

export default Filter;
