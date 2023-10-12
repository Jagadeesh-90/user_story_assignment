import { GridColDef, GridRowId } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { DataGridTable } from "../../molecule/table";
import data from "../../../../db.json";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { getMyData } from "../../../services/inde";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID"
  },
  {
    field: "name",
    headerName: "Name"
  },
  {
    field: "email",
    headerName: "Email",
    width: 150
  }
];
export const UserTable = () => {
  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [rows, setRows] = React.useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getMyData().then((res) => {
      setRows(res.data);
    });
  }, []);
  const handleRowSelection = (params: any) => {
    setSelectedRows(params);
    navigate(`/candidate/${params}`);
  };

  console.log(selectedRows);
  return (
    <DataGridTable
      rows={data.Candidates}
      columns={columns}
      pageSizes={3}
      enableCheckBox={false}
      onRowSelectionModelChange={handleRowSelection}
    />
  );
};
