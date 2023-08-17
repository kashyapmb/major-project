import React from "react";
import CanvasContainer from "./CanvasContainer";
import Sidebar from "./Sidebar";
import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

const Design = () => {
  return (
    <>
      {/* <div>
        <h1>hello</h1>
        <CanvasContainer> </CanvasContainer>
        <Sidebar> </Sidebar>
      </div> */}
      <Grid container component="div">
        <Grid item xs={2}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12}>
            <Navbar></Navbar>
          </Grid>
          <Grid container component="div">
            <Grid item xs={4}>
              <h1 style={{ backgroundColor: "green" }}>block2</h1>
            </Grid>
            <Grid item xs={8}>
              <Box>
                <CanvasContainer></CanvasContainer>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Design;
