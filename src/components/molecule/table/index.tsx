import { DataGrid, DataGridProps, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import React from "react";
export interface DataGridTableProps extends DataGridProps{
    rows:{
        id:number;
        name:string;
        email:string;
    }[];
    columns:GridColDef[],
    pageSizes:number,
    enableCheckBox:boolean,
    onRowSelectionModelChange?: (selection: GridRowSelectionModel) => void;
}
export const DataGridTable=({rows,columns,...props}:DataGridTableProps)=>{
    return(
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: props.pageSizes,
              },
            },
          }}
          checkboxSelection={props.enableCheckBox}
          onRowSelectionModelChange={props.onRowSelectionModelChange}
          />
    )
}