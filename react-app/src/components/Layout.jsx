import React, { useState } from "react";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar setOpen={setOpen} />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: "240px",
          mt: "64px", // Để không bị Navbar che mất
        }}
      >
        <Toolbar />
        {/* Nội dung trang sẽ nằm ở đây */}
      </Box>
    </Box>
  );
};

export default Layout;
