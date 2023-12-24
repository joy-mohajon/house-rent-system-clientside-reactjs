import { Container } from "@mui/joy";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import useRent from "../../Hooks/useRent";
import DashNavbar from "../Navbar/DashNav/DashNavbar";
import SingleProperty from "../PropertyList/SingleProperty/SingleProperty";
import "./Board.css";
import Spinner from "../Spinner/Spinner";

const Board = ({ houses, isLoading }) => {
  //   console.log("Board", houses, houses.length);
  return (
    <div id="content" className="">
      <DashNavbar />

      {/* load house data */}
      <Container className="mt-3 " item sx={{ padding: 1 }}>
        {isLoading ? (
          <Grid container>
            <Spinner />
          </Grid>
        ) : (
          <Grid container>
            {houses?.map((rentData) => (
              <SingleProperty
                delayTime="0.3s"
                rentData={rentData}
                key={rentData._id}
              ></SingleProperty>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Board;
