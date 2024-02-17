/* eslint-disable react/prop-types */
import { Fade, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ClearIcon } from "@mui/x-date-pickers";

const SearchField = ({ search, setSearch }) => {
    return (
        <TextField
            id="searchInputField"
            placeholder="Search class"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle clear search text"
                            onClick={() => {
                                setSearch("");
                            }}
                            edge="end"
                            disableRipple
                        >
                            <Fade in={search !== ""}>
                                <ClearIcon sx={{ color: "text.primary" }} />
                            </Fade>
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default SearchField;
