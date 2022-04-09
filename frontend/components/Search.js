import { useState } from "react";

import { TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({title, onSearch}) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <TextField variant="outlined" label={title} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Button sx={{ marginLeft: '5px' }} variant="contained" startIcon={<SearchIcon />} onClick={() => onSearch(searchValue)}></Button>
    </>
  )
};

export default Search;