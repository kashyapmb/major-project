import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IoCloudUploadSharp } from "react-icons/io5";
import { PiShapesLight } from "react-icons/pi";
import { BiText, BiPencil } from "react-icons/bi";
import { GiArtificialIntelligence } from "react-icons/gi";

const drawerWidth = 150;
const iconsize = 30;

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Canva
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <br />
          <br />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: iconsize }}>
                <PiShapesLight />
              </ListItemIcon>
              <ListItemText primary="elements" />
            </ListItemButton>
          </ListItem>
          <br></br>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: iconsize }}>
                <BiText />
              </ListItemIcon>
              <ListItemText primary="Text" />
            </ListItemButton>
          </ListItem>
          <br></br>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: iconsize }}>
                <IoCloudUploadSharp />
              </ListItemIcon>
              <ListItemText primary="uploads" />
            </ListItemButton>
          </ListItem>
          <br></br>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: iconsize }}>
                <GiArtificialIntelligence />
              </ListItemIcon>
              <ListItemText primary="AI" />
            </ListItemButton>
          </ListItem>
          <br></br>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon style={{ fontSize: iconsize }}>
                <BiPencil />
              </ListItemIcon>
              <ListItemText primary="draws" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
