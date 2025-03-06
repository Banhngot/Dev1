import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  People,
  Article,
  Category,
  Subscriptions,
  CardGiftcard,
  Help,
  Search,
} from "@mui/icons-material";

const drawerWidth = 240;

const menuItems = [
  { text: "Accounts", icon: <People /> },
  { text: "Article", icon: <Article /> },
  { text: "PD Session", icon: <Category /> },
  { text: "Category", icon: <Category /> },
  { text: "Subscriptions", icon: <Subscriptions /> },
  { text: "Voucher", icon: <CardGiftcard /> },
  { text: "Help Documents", icon: <Help /> },
  { text: "Search Settings", icon: <Search /> },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "gray",
          color: "white",
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
