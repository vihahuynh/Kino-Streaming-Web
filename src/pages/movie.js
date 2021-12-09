import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../components/wrapper";

const MoviePlay = ({ isMovie = true }) => {
  const id = useParams().id;

  return (
    <Wrapper>
      <div>
        <h1>TEST</h1>
      </div>
    </Wrapper>
  );
};

export default MoviePlay;
