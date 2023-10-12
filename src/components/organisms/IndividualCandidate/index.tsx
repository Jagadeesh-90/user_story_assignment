import { Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import data from "../../../../db.json";
export const CandidateDetails = () => {
  const { id } = useParams();
  if (typeof id === "string") {
    const selectedUser = data.Candidates.find(
      (candidate) => candidate.id === parseInt(id, 10)
    );

    if (selectedUser) {
      return (
        <>
          <Typography>Name: {selectedUser.name}</Typography>
          <Typography>Email: {selectedUser.email}</Typography>
        </>
      );
    }
  }

  return <Typography>Candidate not found</Typography>;
};
