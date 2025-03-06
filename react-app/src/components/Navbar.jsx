import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "4px 8px",
  borderRadius: "4px",
  width: "400px",
});

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#4A148C", padding: "4px 16px" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", marginRight: "8px" }}
          >
            NurtureWave
          </Typography>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="body1" padding={2}>
            Subscriptions
          </Typography>
        </Box>

        {/* Search Box */}
        <Search>
          <InputBase placeholder="Search" sx={{ flex: 1 }} />
          <SearchIcon sx={{ color: "gray" }} />
        </Search>

        {/* Create Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#b4cfed",
            fontWeight: "bold",
          }}
        >
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
