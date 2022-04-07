import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Switch,
} from "@mui/material";

import React from "react";

export const Inspector = () => {
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["The Godfather", "Pulp Fiction"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
          onChange={(e) => {
            console.log(e);
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Slider
        aria-label="Volume"
        value={30}
        onChange={(e) => {
          console.log(e);
        }}
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Label"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <TextField
            style={{ marginLeft: "50px" }}
            id="outlined-basic"
            // variant="filled"
            size="small"
          />
        }
        label={<div>label</div>}
        labelPlacement="start"
      />
    </>
  );
};
